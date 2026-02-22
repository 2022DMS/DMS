"use client";
import { useEffect, useRef, useState } from "react";
import { SpotlightCard } from "./SpotlightCard";

type Card = {
  title?: string;
  description?: string;
  image?: string;
  imgBg?: string;
  imageAlt?: string;
  header?: string;
  paragraph?: string;
  spotlightColor?: string;
};

type VerticalTimelineProps = {
  cards: Card[];
};

export function VerticalTimeline({ cards }: VerticalTimelineProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [highlightProgress, setHighlightProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrameId: number;

    const updateProgress = () => {
      currentProgress += (targetProgress - currentProgress) * 0.1;

      if (Math.abs(currentProgress - targetProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      setHighlightProgress(currentProgress);

      if (currentProgress !== targetProgress) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const visible = windowHeight - rect.top;
      const completion = (visible / sectionHeight) * 100;

      targetProgress = (completion - 10) / (150 - 10);
      targetProgress = Math.max(0, Math.min(1, targetProgress));

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative flex flex-row gap-[21px] md:gap-[83px] w-full md:w-auto">

      {/* Timeline line */}
      <div className="relative w-[3px]">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#2F2F2F]" />

        <div
  className="absolute top-0 left-0 w-[3px] bg-white will-change-[height]"
  style={{
    height: `${highlightProgress * 100}%`
  }}
/>

      </div>

      {/* Cards */}
      <div className="flex-1 flex flex-col gap-[13px]">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <SpotlightCard
              spotlightColor={card.spotlightColor ?? "rgba(151, 71, 255, 0.2)"}
              image={card.image}
              imgBg={card.imgBg}
              imageAlt={card.imageAlt}
              header={card.header}
              paragraph={card.paragraph}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
