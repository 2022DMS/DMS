"use client";

import { useState, useEffect, useRef } from "react";

export type TestimonialItem = {
  testimonial: string;
  author: string;
  numOfStars: number;
};

export type TestimonialCarouselProps = {
  items: TestimonialItem[];
  autoSlideInterval?: number;
};

export default function TestimonialCarousel({
  items,
  autoSlideInterval = 10000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  if (!items.length) return null;

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth >= 768 ? 3 : 1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerSlide]);

  const slides: TestimonialItem[][] = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, autoSlideInterval);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides, autoSlideInterval]);

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
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }

    if (distance < -threshold) {
      setDirection("left");
      setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }

    touchStartX.current = null;
    touchEndX.current = null;
    startTimer();
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left");
      setActiveIndex((prev) => prev - 1);
      startTimer();
    }
  };

  const handleNext = () => {
    if (activeIndex < totalSlides - 1) {
      setDirection("right");
      setActiveIndex((prev) => prev + 1);
      startTimer();
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
      <div className="flex flex-col justify-start items-stretch w-full md:flex-row md:items-center md:justify-between gap-4">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
          <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[53px] tracking-[-1px] md:tracking-[-2px] text-center md:text-left text-white pb-[16px]">
            Trusted by Growing Teams
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText">
            See how our clients achieved real business growth through our design, development, and digital strategy expertise.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center md:justify-end">
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`cursor-pointer rounded-[12px] px-[36px] py-[13px] transition-all duration-500 ease-in-out ${
                activeIndex === 0
                  ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                  : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
              }`}
            >
              <img
                src="/icons/left-arrow.svg"
                alt="Left arrow"
                className="w-5 h-5 object-contain"
              />
            </button>

            <button
              onClick={handleNext}
              disabled={activeIndex === totalSlides - 1}
              className={`cursor-pointer rounded-[12px] px-[36px] py-[13px] transition-all duration-500 ease-in-out ${
                activeIndex === totalSlides - 1
                  ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                  : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
              }`}
            >
              <img
                src="/icons/right-arrow.svg"
                alt="Right arrow"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px]">
                {slide.map((item, index) => (
                  <div key={index} className="w-full">
                    <div className="w-full p-6 bg-[#191919] rounded-[18px] flex flex-col items-stretch justify-start">
                      <p className="font-segoe font-semibold text-[14px] leading-[24px] text-left text-white border-b border-b-[#FFFFFF1A] pb-4 px-2.5 pt-2.5">
                        {item.author}
                      </p>

                      <p className="font-segoe font-normal text-[16px] leading-[24px] text-left text-white pb-[24px] pt-[24px]">
                        {item.testimonial}
                      </p>

                      <div className="flex flex-row items-center justify-between">
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
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-center mt-4">
        <div className="flex flex-row items-center gap-[8px]">
          {slides.map((_, idx) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}