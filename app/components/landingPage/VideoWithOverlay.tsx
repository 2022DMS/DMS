"use client";
import React, { useRef, useState } from "react";

export const VideoWithOverlay = ({
  src = "/videos/homepage_video.mp4",
  thumbnail = "/images/web-design-hero.jpg",
  overlayImage = "/images/play-button.png",
}: {
  src?: string;
  thumbnail?: string;
  overlayImage?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isStarting, setIsStarting] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      setIsStarting(true);
      await video.play();
      // do NOT hide the thumbnail here
      // wait until the video is actually rendering
    } catch (error) {
      console.error("Video play failed:", error);
      setIsStarting(false);
      setIsPlaying(false);
      setShowThumbnail(true);
    }
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlaying = () => {
    setIsStarting(false);
    setIsPlaying(true);
    setShowThumbnail(false);
  };

  const handleLoadedData = () => {
    // fallback: first frame is ready
    if (isStarting) {
      setShowThumbnail(false);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    setIsPlaying(false);
    setIsStarting(false);
    setShowThumbnail(true);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        preload="auto"
        playsInline
        className="block w-full h-full object-cover"
        onLoadedData={handleLoadedData}
        onPlaying={handlePlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />

      {showThumbnail && (
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
          className="absolute inset-0 z-20"
          aria-label="Pause video"
        />
      )}
    </div>
  );
};