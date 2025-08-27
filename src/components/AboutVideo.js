import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./AboutVideo.css";
import video from "../assets/videos/videoEditor.mp4";

const AboutVideo = () => {
  const [muted, setMuted] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef(null);

  // Disable scrolling when expanded
  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "auto";
  }, [expanded]);

  // Toggle mute/unmute
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  // Toggle expand/minimize
  const toggleExpand = (e) => {
    if (e) e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  // Video element for portal
  const videoContent = (
    <div className="expanded-video-container" onClick={toggleExpand}>
      <video
        ref={videoRef}
        className="about-video expanded-video"
        src={video}
        autoPlay
        muted={muted}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="expanded-controls">
        <button onClick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
        <button onClick={toggleExpand}>Minimize</button>
      </div>
    </div>
  );

  return (
    <div className="video-wrapper">
      {!expanded && (
        <>
          <video
            ref={videoRef}
            src={video}
            style={{ width: "100%", borderRadius: "15px", marginTop: "10px" }}
            muted={muted}
            autoPlay
            playsInline
            onClick={toggleExpand}
          />
          <div className="video-controls">
            <button onClick={toggleMute}>{muted ? "Unmute" : "Mute"}</button>
          </div>
        </>
      )}
      {expanded &&
        ReactDOM.createPortal(videoContent, document.getElementById("root"))}
    </div>
  );
};

export default AboutVideo;
