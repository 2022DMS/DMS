import { useState, useEffect, useRef } from "react";

type CarouselItem = {
  category?: string;
  logo?: string;
  title?: string;
  description?: string;
  imgWidth?: string;
  bullets?: string[];
  image?: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

type CardProps = {
  item: CarouselItem;
};

function DefaultCard({ item }: CardProps) {
  return (
    <div className="md:ml-[20px] ml-3 bg-[#191919] px-[14px] md:px-[19px] py-[20px] md:py-[20.5px] rounded-xl flex flex-col justify-start items-stretch md:flex-row md:justify-center md:items-top gap-4 border border-[#FFFFFF14]">
      <div className="px-4 md:w-[30%] w-full pt-2.5">
        {item.logo && (
          <img
            src={item.logo}
            alt="logo"
            className={`w-full ${item.imgWidth ?? ""} object-contain pb-6`}
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
            {item.bullets?.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>

      {item.image && (
        <div className="md:w-[70%] w-full flex justify-end">
          <img
            src={item.image}
            alt="case"
            className="object-cover object-contain md:h-[475px]"
          />
        </div>
      )}
    </div>
  );
}

function KswCard({ item }: CardProps) {
  return (
    <div className="md:ml-[20px] ml-3 bg-[#191919] px-[14px] md:p-[30px] py-[20px] rounded-xl border border-[#FFFFFF14]">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          {item.title && (
            <h3 className="font-segoe font-semibold text-white text-[36px] leading-[36px] pb-[29px]">
              {item.title}
            </h3>
          )}

          {item.description && (
            <p className="font-segoe text-[16px] leading-[24px] text-brand-cardText pb-6">
              {item.description}
            </p>
          )}

          <div className="flex flex-col items-stretch justify-start md:flex-row md:items-center gap-2">
            <div className="px-[16px] py-[24px] bg-[#212121] rounded-[12px] border border-[#FFFFFF14] backdrop-blur-[26px] shadow-[0px_1px_2.9px_0px_#00000066]">
              <img
                src="/images/ksw-icon-1.png"
                alt="logo"
                className={`w-full max-w-[36.15px] object-cover pb-6`}
              />

              <p className="pb-[10px] font-segoe font-semibold text-[38.1px] leading-[35.72px] tracking-[-0.79px] text-left text-white">
                10.3x
              </p>

              <p className="font-segoe font-semibold text-[12px] leading-[16.33px] text-left text-white">
                Return on marketing spend
              </p>
            </div>

            <div className="px-[16px] py-[24px] bg-[#212121] rounded-[12px] border border-[#FFFFFF14] backdrop-blur-[26px] shadow-[0px_1px_2.9px_0px_#00000066]">
              <img
                src="/images/ksw-icon-2.png"
                alt="logo"
                className={`w-full max-w-[36.15px] object-cover pb-6`}
              />

              <p className="pb-[10px] font-segoe font-semibold text-[38.1px] leading-[35.72px] tracking-[-0.79px] text-left text-white">
                +301%
              </p>

              <p className="font-segoe font-semibold text-[12px] leading-[16.33px] text-left text-white">
                Increase in leads
              </p>
            </div>

            <div className="px-[16px] py-[24px] bg-[#212121] rounded-[12px] border border-[#FFFFFF14] backdrop-blur-[26px] shadow-[0px_1px_2.9px_0px_#00000066]">
              <img
                src="/images/ksw-icon-3.png"
                alt="logo"
                className={`w-full max-w-[36.15px] object-cover pb-6`}
              />

              <p className="pb-[10px] font-segoe font-semibold text-[38.1px] leading-[35.72px] tracking-[-0.79px] text-left text-white">
                +43%
              </p>

              <p className="font-segoe font-semibold text-[12px] leading-[16.33px] text-left text-white">
                Increase in organic traffic
              </p>
            </div>
          </div>
        </div>

        {item.image && (
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={item.image}
              alt="KSW case"
              className="rounded-[12px] object-contain md:h-[379px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function Carousel({ items = [] }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  if (!items.length) return null;

/* =========================
     Arrows SUPPORT
  ========================= */
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
    setActiveIndex(activeIndex - 1);
  };

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
      setActiveIndex((prev) => (prev + 1) % items.length);
    }

    if (distance < -threshold) {
      // swipe right -> prev
      setIndex((prev) => (prev - 1 + items.length) % items.length);
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }

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
            {item.category === "KSW" ? (
              <KswCard item={item} />
            ) : (
              <DefaultCard item={item} />
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex flex-row items-center gap-8 pt-9 md:ml-[20px] ml-3">
        <button
          onClick={prevSlide}
          disabled={activeIndex === 0}
          className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] transition-all duration-500 ease-in-out ${
            activeIndex === 0
              ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
              : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
          }`}
        >
          <img src="/icons/chevron-left.svg" alt="Left arrow" className="w-[5.88x] object-contain" />
        </button>

        <button
          onClick={nextSlide}
          disabled={activeIndex === items.length - 1}
          className={`cursor-pointer rounded-[12px] px-[15px] py-[13px] transition-all duration-500 ease-in-out ${
            activeIndex === items.length - 1
              ? "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
              : "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
          }`}
        >
          <img src="/icons/chevron-right.svg" alt="Right arrow" className="w-[5.88x] object-contain" />
        </button>
      </div>
    </div>
  );
}
