# API Documentation

## Base URL

```
http://localhost:5000
```

---

## 1️⃣ Create Overlay

**Endpoint**
```
POST /overlays
```

**Request Body**
```json
{
  "type": "text",
  "content": "Hello Overlay",
  "x": 50,
  "y": 50,
  "width": 150,
  "height": 50
}
```

**Response**
```json
{
  "id": "overlay_id"
}
```

---

## 2️⃣ Get All Overlays

**Endpoint**
```
GET /overlays
```

**Response**
```json
[
  {
    "_id": "overlay_id",
    "type": "text",
    "content": "Hello Overlay",
    "x": 50,
    "y": 50,
    "width": 150,
    "height": 50
  }
]
```

---

## 3️⃣ Update Overlay

**Endpoint**
```
PUT /overlays/:id
```

**Request Body**
```json
{
  "content": "Updated Text"
}
```

**Response**
```json
{
  "message": "Updated"
}
```

---

## 4️⃣ Delete Overlay

**Endpoint**
```
DELETE /overlays/:id
```

**Response**
```json
{
  "message": "Deleted"
}
```
