"use client";
import React, { useRef, useState } from "react";

export const VideoWithOverlay = ({
  src = "/videos/homepage_video.mp4",
  overlayImage = "/images/play-button.png",
}: {
  src?: string;
  overlayImage?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const handleToggle = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Reset video when it ends
  const handleEnded = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop={false}
        playsInline
        onClick={handleToggle}
        onEnded={handleEnded}
      />

      {/* Overlay play button */}
      {!isPlaying && (
        <div
          onClick={handleToggle}
          className="absolute inset-0 flex items-center justify-center bg-black/40"
        >
          <img
            src={overlayImage}
            alt="Play video"
            className="w-20 h-20 md:w-32 md:h-32"
            draggable={false}
          />
        </div>
      )}
    </div>
  );
};
