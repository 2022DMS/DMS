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

  const handleToggle = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const handleEnded = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer"
      onClick={isPlaying ? handleToggle : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        poster="/images/homepage-video-poster.jpg"
        preload="metadata"
        className="w-full h-full object-cover"
        loop={false}
        playsInline
        onEnded={handleEnded}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40"
          aria-label="Play video"
        >
          <img
            src={overlayImage}
            alt="Play video"
            className="w-20 h-20 md:w-32 md:h-32"
            draggable={false}
          />
        </button>
      )}
    </div>
  );
};