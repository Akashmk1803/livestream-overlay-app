import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Rnd } from "react-rnd";
import axios from "axios";

function App() {
  const videoRef = useRef(null);
  const [overlays, setOverlays] = useState([]);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("http://localhost:5000/stream/output.m3u8");
      hls.attachMedia(video);
    }

    fetchOverlays();
  }, []);

  const fetchOverlays = async () => {
    const res = await axios.get("http://localhost:5000/overlays");
    setOverlays(res.data);
  };

  const addOverlay = async () => {
    const newOverlay = {
      type: "text",
      content: "Hello Overlay",
      x: 50,
      y: 50,
      width: 150,
      height: 50
    };

    await axios.post("http://localhost:5000/overlays", newOverlay);
    fetchOverlays();
  };
  
  const deleteOverlay = async (id) => {
    await axios.delete(`http://localhost:5000/overlays/${id}`);
    fetchOverlays();
  };
  
  const updateOverlay = async (id) => {
    await axios.put(`http://localhost:5000/overlays/${id}`, {
      content: "Updated Text"
    });
    fetchOverlays();
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>Livestream Player</h2>

      <div style={{ position: "relative", width: "800px" }}>
        <video ref={videoRef} controls width="800" />

        {overlays.map((overlay) => (
          <Rnd
            key={overlay._id}
            default={{
              x: overlay.x,
              y: overlay.y,
              width: overlay.width,
              height: overlay.height
            }}
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* {overlay.content} */}
            <div style={{ textAlign: "center" }}>
              <div>{overlay.content}</div>
              <button onClick={() => updateOverlay(overlay._id)}>Update</button>
              <button onClick={() => deleteOverlay(overlay._id)}>Delete</button>
            </div>
          
          </Rnd>
        ))}
      </div>

      <br />
      <button onClick={addOverlay}>Add Overlay</button>
    </div>
  );
}

export default App;
