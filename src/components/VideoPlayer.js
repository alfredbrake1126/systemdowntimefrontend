import React from 'react';

const VideoPlayer = ({ src, title, autoPlay, onVideoEnd }) => {
  return (
    <div className="video-player">
      <div className="relative w-full h-[calc(100vh-176px)]"> {/* Adjust height based on header */}
        <video 
          className="absolute top-0 left-0 w-full h-full" 
          controls 
          autoPlay={autoPlay} 
          onEnded={onVideoEnd} // Trigger callback when the video ends
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
