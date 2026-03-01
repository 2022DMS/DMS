import { useState, useEffect, useRef } from "react";

type CarouselItem = {
  logo?: string;
  title?: string;
  description?: string;
  imgWidth?: string;
  bullets?: string[];
  image?: string;
};

type CarouselProps = {
  items: CarouselItem[];
  autoSlideInterval?: number; // optional override
};

export function Carousel({ items = [], autoSlideInterval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // <-- new

  if (!items.length) return null;

  /* =========================
     AUTO SLIDE
  ========================= */
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, autoSlideInterval);
  };

  useEffect(() => {
    startTimer(); // start on mount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, autoSlideInterval]);

  /* =========================
     SWIPE SUPPORT
  ========================= */
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    touchStartX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    touchEndX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) {
      // swipe left -> next
      setIndex((prev) => (prev + 1) % items.length);
    }

    if (distance < -threshold) {
      // swipe right -> prev
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }

    // Reset auto-slide timer after swipe
    startTimer(); // <-- this is all you need to add

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* ========================= */

  return (
    <div
      className="w-full overflow-hidden"
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
        className="flex md:mr-[20px] mr-3 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">

            {/* CARD */}
            <div className="md:ml-[20px] ml-3 bg-[#191919] px-[14px] md:px-[19px] py-[20px] md:py-[20.5px] rounded-xl flex flex-col justify-start items-stretch md:flex-row md:justify-center md:items-top gap-4 border border-[#FFFFFF14]">

              {/* LEFT SIDE */}
              <div className="px-4 md:w-[30%] w-full pt-2.5">

                {item.logo && (
                  <img
                    src={item.logo}
                    alt="logo"
                    className={`w-full ${item.imgWidth} object-contain pb-6`}
                  />
                )}

                {item.title && (
                  <h3 className="font-segoe font-semibold text-[36px] leading-[36px] text-left pb-6 text-white">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="font-segoe text-[16px] leading-[24px] text-brand-cardText pb-8">
                    {item.description}
                  </p>
                )}

                {(item.bullets ?? []).length > 0 && (
                  <ul className="pl-5 space-y-3 text-white list-disc">
                    {(item.bullets ?? []).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

              </div>

              {/* RIGHT SIDE IMAGE */}
              {item.image && (
                <div className="md:w-[70%] w-full">
                  <img
                    src={item.image}
                    alt="case"
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`p-[1.5px] cursor-pointer rounded-xl transition-all ${
              i === index
                ? "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]"
                : "bg-transparent"
            }`}
          >
            <div
              className={`px-[14px] py-[10px] max-w-[35px] max-h-[38px] rounded-lg flex items-center justify-center font-segoe font-semibold text-[16px] leading-[16px] transition-all ${
                i === index
                  ? "[background:radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] text-white"
                  : "bg-transparent text-[#565656]"
              }`}
            >
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
