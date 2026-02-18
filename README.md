# Livestream Overlay Application

## Overview

This application allows users to:

- View a livestream video (RTSP-compatible streaming converted to HLS)
- Add custom overlays (text)
- Drag and resize overlays
- Perform full CRUD operations on overlays
- Persist overlay settings using MongoDB

---

## Tech Stack

- **Frontend:** React
- **Backend:** Flask (Python)
- **Database:** MongoDB
- **Streaming Conversion:** FFmpeg (RTSP → HLS)
- **Player:** HLS.js

---

## Architecture

RTSP Stream → FFmpeg → HLS (.m3u8) → Flask Server → React Player (HLS.js)

### Overlay Data Flow

React → Flask REST API → MongoDB → React

---

## Features

- Livestream playback
- Play / Pause / Volume control
- Add overlay
- Update overlay
- Delete overlay
- Persistent storage
- Draggable and resizable overlays

---

## How to Run

Please refer to `User_Guide.md` for detailed setup instructions.
