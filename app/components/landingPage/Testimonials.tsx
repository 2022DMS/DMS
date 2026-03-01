"use client";

import { useState, useEffect, useRef } from "react";

export type TestimonialItem = {
  testimonial: string;
  author: string;
  numOfStars: number; // max 5
};

export type TestimonialCarouselProps = {
  items: TestimonialItem[];
  autoSlideInterval?: number; // optional auto-slide
};

export default function TestimonialCarousel({
  items,
  autoSlideInterval = 5000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  if (!items.length) return null;

  /* =========================
     AUTO SLIDE
  ========================= */
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoSlideInterval);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, autoSlideInterval]);

  /* =========================
     TOUCH SUPPORT
  ========================= */
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    touchStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    touchEndX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) {
      // swipe left -> next
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % items.length);
    }

    if (distance < -threshold) {
      // swipe right -> prev
      setDirection("left");
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;

    startTimer(); // reset auto-slide after swipe
  };

  /* =========================
     HANDLERS
  ========================= */
  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left");
      setActiveIndex(activeIndex - 1);
      startTimer(); // reset timer
    }
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setDirection("right");
      setActiveIndex(activeIndex + 1);
      startTimer(); // reset timer
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center gap-[17px] overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={(e) => touchStartX.current !== null && handleTouchMove(e)}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {/* SLIDE TRACK */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="w-full p-6 bg-[#191919] rounded-[18px] flex flex-col items-stretch justify-start">
              <p className="font-segoe font-normal text-[16px] leading-[24px] text-left text-white pb-[32px]">
                {item.testimonial}
              </p>

              <div className="flex flex-row items-center justify-between">
                <p className="font-segoe font-semibold text-[16px] leading-[24px] text-left text-white">
                  {item.author}
                </p>

                <div className="flex flex-row items-center justify-start gap-[3px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      src="/images/star.png"
                      alt="Star"
                      className={`w-full object-contain max-w-[18px] ${
                        i < item.numOfStars ? "" : "opacity-30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="w-full flex flex-row items-center justify-between mt-4">
        {/* Dots */}
        <div className="flex flex-row items-center gap-[8px]">
          {items.map((_, idx) => (
            <span
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? "right" : "left");
                setActiveIndex(idx);
                startTimer();
              }}
              className={`w-[8px] h-[8px] rounded-full transition-colors duration-300 cursor-pointer ${
                idx === activeIndex ? "bg-[#FAFAFA]" : "bg-[#D9D9D9] opacity-10"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] transition-all duration-500 ease-in-out ${
              activeIndex === 0
                ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
            }`}
          >
            <img src="/icons/left-arrow.svg" alt="Left arrow" className="w-5 h-5 object-contain" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === items.length - 1}
            className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] transition-all duration-500 ease-in-out ${
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
  );
}