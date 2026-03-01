"use client";
import { useState, useRef, useEffect } from "react";
import { X, Plus } from "lucide-react";

export type AccordionItem = {
  title: string;
  description: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className={`w-full rounded-[18px] overflow-hidden transition-all duration-500 ease-in-out ${
              isActive
                ? "bg-[#1A1A1A] backdrop-blur-[40px] p-5"
                : "bg-[linear-gradient(79.1deg,rgba(24,24,24,0.5)_23.54%,rgba(40,24,58,0.5)_53.74%,rgba(24,24,24,0.5)_80.65%)] p-5"
            }`}
          >
            {/* Header */}
            <div
              className="flex flex-row items-center justify-between w-full cursor-pointer select-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="font-segoe font-semibold text-[14px] leading-[20px] text-left text-white">
                {item.title}
              </h3>

              <div className={`cursor-pointer rounded-lg h-full p-[1.5px] ${
                    isActive 
                        ? "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,rgba(170,91,255,0.5)_0%,rgba(151,71,255,0.5)_52.42%,rgba(124,14,221,0.5)_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]" 
                        : "bg-[rgba(255,255,255,0.3)]"
                    }`}>
                <button
                  className={`cursor-pointer flex items-center gap-3 justify-center font-semibold rounded-lg p-[7.93px] w-full h-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)]"
                      : "bg-[#101010] shadow-[inset_0_0_14px_0_#8F8F8F4D]"
                    }`}
                  aria-label={isActive ? "Collapse" : "Expand"}
                >
                  {isActive ? (
                    <X className="w-[15px] h-[15px] transition-transform duration-500 ease-in-out rotate-0 text-white" />
                  ) : (
                    <Plus className="w-[15px] h-[15px] transition-transform duration-500 ease-in-out text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Content */}
            <div
                ref={(el) => {
                    contentRefs.current[index] = el; 
                }}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{
                    maxHeight: isActive
                    ? `${contentRefs.current[index]?.scrollHeight || 0}px`
                    : "0px",
                }}
            >
              <div
                className={`transform transition-all duration-500 ease-in-out ${
                  isActive ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
              >
                <p className="font-segoe font-normal text-[14px] leading-[24px] tracking-[0.02em] text-left text-brand-cardText pt-3">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}