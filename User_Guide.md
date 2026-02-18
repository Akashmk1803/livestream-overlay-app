# User Guide

## Prerequisites

Make sure the following are installed:

- Python 3
- Node.js
- MongoDB (local installation)
- FFmpeg (added to system PATH)

---

## 🔹 Backend Setup

Navigate to backend folder:

```
cd backend
```

Create virtual environment:

```
python -m venv venv
```

Activate environment (Windows):

```
venv\Scripts\Activate
```

Install dependencies:

```
pip install flask flask-cors pymongo
```

Run backend:

```
python app.py
```

Backend runs at:

```
http://localhost:5000
```

---

## 🔹 Streaming Setup

Place a sample video file inside the backend folder:

```
sample.mp4
```

Generate HLS stream:

```
ffmpeg -stream_loop -1 -re -i sample.mp4 -c:v libx264 -f hls -hls_time 2 -hls_list_size 5 -hls_flags delete_segments stream/output.m3u8
```

Keep this command running to maintain the livestream.

---

## 🔹 Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start frontend:

```
npm start
```

Open the application in browser:

```
http://localhost:3000
```

---

## 🔹 Using the Application

- Click **Play** to start livestream
- Click **Add Overlay** to create a new overlay
- Drag and resize the overlay on the video
- Click **Update** to modify overlay text
- Click **Delete** to remove the overlay
