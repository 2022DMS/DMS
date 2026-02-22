"use client";
import { SpiralAnimation } from "./components/landingPage/SpiralAnimation"
import { useState, useEffect } from 'react'
import Home from "./pages/landingPage/page";

const Page = () => {
  const [showHome, setShowHome] = useState(false);
  const [startVisible, setStartVisible] = useState(false);
  return <Home />

  // Fade in the start button after animation loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle click to show Home
  const handleStart = () => {
    setShowHome(true);
  };

  if (showHome) {
    return <Home />; // Render Home after button click
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black z-50">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Simple Elegant Text Button with Pulsing Effect */}
      <div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          transition-all duration-1500 ease-out
          ${startVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <button
          onClick={handleStart}
          className="
            text-white text-2xl tracking-[0.2em] uppercase font-extralight
            transition-all duration-700
            hover:tracking-[0.3em] animate-pulse cursor-pointer
          "
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Page;
