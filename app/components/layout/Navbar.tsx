"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-brand-dark fancy-border h-[78px] relative z-49">
        <div className="flex h-full flex-row items-center justify-between px-[33px] max-w-[1440px] mx-auto px-10">
          {/* LEFT */}
          <div className="w-auto">
            <Link href="/">
                <div className="p-2.5 w-full">
                <img
                    src="/images/logo.png"
                    alt="DMS Logo"
                    className="w-full max-w-[48px] object-contain"
                />
                </div>
            </Link>
          </div>

          {/* RIGHT (Desktop) */}
          <div className="hidden md:flex flex-row items-center justify-end gap-8 relative">
            {/* Links */}
            <div className="flex flex-row items-center gap-[17px] relative">
              <a href="/landingPage" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Home</a>
              <a href="/about" className="text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">About</a>

              {/* Services Mega Menu */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(prev => !prev)}
                  className="cursor-pointer flex items-center gap-1 text-white p-2.5 font-segoe font-normal text-[14px] leading-[100%]"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                {/* Mega menu content */}
                <div
                  className={`absolute top-full mt-2 w-[221px] bg-[#1A1A1A] rounded-lg shadow-lg transition-all duration-300 overflow-hidden z-50 ${
                    servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-[12px] border-[0.5px] border-white/30 shadow-[0_10px_84.2px_6px_#9747FF40] rounded-lg flex flex-col py-2.5 px-[14px]">
                    <a href="/website-development" className="py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Website design</a>
                    <a href="/branding" className="border-t border-b border-[#2A2A2A] py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Branding</a>
                    <a href="/growth-and-marketing-support" className="py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Digital Marketing</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Contact Button */}
            <Link href="/contact-us">
                <div className="z-1 rounded-xl h-full p-[1.5px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]">
                <div  className="flex items-center gap-3 justify-center text-white font-semibold rounded-xl bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] px-[29px] py-[10px] w-full h-full cursor-pointer">
                    Contact Us
                    <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
                </div>
                </div>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <div className="z-1 rounded-xl h-full p-[1.5px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]">
              <button onClick={() => setMenuOpen(prev => !prev)} className="flex items-center gap-3 justify-center text-white font-semibold rounded-xl bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] p-[9.91px] w-full h-full cursor-pointer">
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div className={`fixed px-3 pt-[78px] inset-0 w-full h-screen bg-brand-dark z-48 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col items-center justify-start gap-[17px] pt-[55px]">
          <a href="/landingPage" className="text-white p-2.5 font-segoe font-normal text-[14px]">Home</a>
          <a href="/about" className="text-white p-2.5 font-segoe font-normal text-[14px]">About</a>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col w-full relative max-w-[310px]">
            <button
              onClick={() => setServicesOpen(prev => !prev)}
              className="flex flex-row items-center justify-center gap-2.5 w-full px-4 py-2 text-white font-segoe font-normal rounded-lg"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div className={`flex flex-col overflow-hidden transition-[max-height] duration-300 mt-2 rounded-lg ${servicesOpen ? "max-h-[300px]" : "max-h-0"}`}>
                <a href="/website-development" className="py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Website design</a>
                <a href="/branding" className="border-t border-b border-[#2A2A2A] py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Branding</a>
                <a href="/growth-and-marketing-support" className="py-2.5 hover:bg-[#2A2A2A] text-center text-white font-segoe font-normal text-[14px] leading-[100%] tracking-[0px]">Digital Marketing</a>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <a href="/contact-us">
            <div className="z-1 rounded-xl h-full p-[1.5px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66]">
              <button className="flex items-center gap-3 justify-center text-white font-semibold rounded-xl bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] px-[29px] py-[10px] w-full h-full cursor-pointer">
                Contact Us
                <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}