import React, { useRef } from 'react';

const VideoPlayer = ({ src, title, autoPlay, onVideoEnd }) => {
  const videoRef = useRef(null);

  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="video-player">
      <div className="relative w-full h-[calc(100vh-176px)]">
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full" 
          controls 
          autoPlay={autoPlay} 
          onEnded={onVideoEnd}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={handleFullScreen}>Full Screen</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
