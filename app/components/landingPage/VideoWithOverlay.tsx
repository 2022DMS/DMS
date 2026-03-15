"use client";
import React, { useRef, useState } from "react";

export const VideoWithOverlay = ({
  src = "/videos/homepage_video.mp4",
  thumbnail = "/images/homepage-video-thumbnail.jpg",
  overlayImage = "/images/play-button.png",
}: {
  src?: string;
  thumbnail?: string;
  overlayImage?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      setHasStarted(true);
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Video play failed:", error);
      setHasStarted(false);
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handleEnded = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setHasStarted(false);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        preload="auto"
        playsInline
        className="block w-full h-full object-cover"
        onEnded={handleEnded}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {!hasStarted && (
        <div className="absolute inset-0 z-10">
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40"
            aria-label="Play video"
          >
            <img
              src={overlayImage}
              alt="Play video"
              className="w-20 h-20 md:w-32 md:h-32"
              draggable={false}
            />
          </button>
        </div>
      )}

      {isPlaying && (
        <button
          type="button"
          onClick={handlePause}
          className="absolute inset-0 z-10"
          aria-label="Pause video"
        />
      )}
    </div>
  );
};