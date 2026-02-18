from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import os

app = Flask(__name__)
CORS(app)

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
db = client["livestreamDB"]
collection = db["overlays"]

# Serve HLS stream folder
@app.route('/stream/<path:filename>')
def stream(filename):
    return send_from_directory('stream', filename)

# CREATE
@app.route('/overlays', methods=['POST'])
def create_overlay():
    data = request.json
    result = collection.insert_one(data)
    return jsonify({"id": str(result.inserted_id)})

# READ
@app.route('/overlays', methods=['GET'])
def get_overlays():
    overlays = list(collection.find())
    for overlay in overlays:
        overlay["_id"] = str(overlay["_id"])
    return jsonify(overlays)

# UPDATE
@app.route('/overlays/<id>', methods=['PUT'])
def update_overlay(id):
    collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": request.json}
    )
    return jsonify({"message": "Updated"})

# DELETE
@app.route('/overlays/<id>', methods=['DELETE'])
def delete_overlay(id):
    collection.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Deleted"})

if __name__ == "__main__":
    app.run(debug=True)
