"use client";

import { useState, useEffect } from "react";

export type TestimonialItem = {
  testimonial: string;
  author: string;
  numOfStars: number; // max 5
};

export type TestimonialCarouselProps = {
  items: TestimonialItem[];
};

export default function MobileTestimonials({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    if (activeIndex > 0) {
      setPrevIndex(activeIndex);
      setDirection("left");
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setPrevIndex(activeIndex);
      setDirection("right");
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-[17px] overflow-hidden">
      {/* Carousel Item */}
      <div
        className={`w-full p-6 bg-[#191919] rounded-[18px] flex flex-col items-stretch justify-start transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(${direction === "right" ? "0" : "0"})`, // wrapper remains 0
        }}
      >
        <div
          key={activeIndex} // ensures React treats this as a new element for transition
          className={`transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(${direction === "right" ? "100%" : "-100%"})`,
            animation: `slide-in-${direction} 0.5s forwards`,
          }}
        >
          <p className="font-segoe font-normal text-[16px] leading-[24px] text-left text-white pb-[32px]">
            {items[activeIndex].testimonial}
          </p>

          <div className="flex flex-row items-center justify-between">
            <p className="font-segoe font-semibold text-[16px] leading-[24px] text-left text-white">
              {items[activeIndex].author}
            </p>

            <div className="flex flex-row items-center justify-start gap-[3px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src="/images/star.png"
                  alt="Star"
                  className={`w-full object-contain max-w-[18px] ${
                    i < items[activeIndex].numOfStars ? "" : "opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-row items-center justify-between">
        {/* Dots */}
        <div className="flex flex-row items-center gap-[8px]">
          {items.map((_, idx) => (
            <span
              key={idx}
              className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 ${
                idx === activeIndex ? "bg-[#FAFAFA]" : "bg-[#D9D9D9] opacity-10"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex flex-row items-center gap-3">
          <div
            className={`cursor-pointer rounded-[12px] h-full p-[0.5px] ${
              activeIndex === 0
                ? "bg-[rgba(255,255,255,0.3)]"
                : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,rgba(170,91,255,0.5)_0%,rgba(151,71,255,0.5)_52.42%,rgba(124,14,221,0.5)_100%)]"
            }`}
          >
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] w-full h-full transition-all duration-500 ease-in-out ${
                activeIndex === 0
                  ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                  : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
              }`}
            >
              <img src="/icons/left-arrow.svg" alt="Left arrow" className="w-5 h-5 object-contain" />
            </button>
          </div>

          <div
            className={`cursor-pointer rounded-[12px] h-full p-[0.5px] ${
              activeIndex === items.length - 1
                ? "bg-[rgba(255,255,255,0.3)]"
                : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,rgba(170,91,255,0.5)_0%,rgba(151,71,255,0.5)_52.42%,rgba(124,14,221,0.5)_100%)]"
            }`}
          >
            <button
              onClick={handleNext}
              disabled={activeIndex === items.length - 1}
              className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] w-full h-full transition-all duration-500 ease-in-out ${
                activeIndex === items.length - 1
                  ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                  : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
              }`}
            >
              <img src="/icons/right-arrow.svg" alt="Right arrow" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        div[style*="animation"] {
          animation-name: ${direction === "right" ? "slide-in-right" : "slide-in-left"};
        }
      `}</style>
    </div>
  );
}