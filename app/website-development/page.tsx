"use client";

import { Sparkles } from "../components/landingPage/Sparkles";
import { PurpleGradientButton } from "../components/landingPage/PurpleGradientButton";
import Accordion from "../components/landingPage/Accordion";
import Testimonials from "../components/landingPage/Testimonials";
import MobileTestimonials from "../components/landingPage/MobileTestimonials";
import { faqs, testimonials } from "./pageData";
import Link from "next/link";

export default function WebsiteDevelopment() {
  return (
  <div className="bg-brand-dark">
    <div>
      {/* Sparkles */}
      <div className="absolute inset-x-0 top-[78px] h-[20vh] md:h-[50vh] z-3">
        <Sparkles
          density={1200}
          color="#ffffff"
          className="
            absolute inset-0 w-full h-full
            [mask-image:linear-gradient(to_bottom,white,transparent)]
          "
        />
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="relative flex md:flex md:flex-row md:items-start md:justify-between flex flex-col justify-start items-center gap-8 bg-transparent z-10 md:pt-[98px] pt-[40px] md:pb-[63px] pb-[0px] max-w-[1440px] mx-auto md:px-10 px-3 gap-[39px]">
          {/* Left */}
          <div className="flex-1">
            <h1 className="font-segoe font-normal text-[56px] md:text-[64px] leading-[56px] md:leading-[64px] tracking-[-1px] text-center md:text-left text-white align-middle pb-[24px]">
              Website <br /> Development
            </h1>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[24px] md:pb-[46px]">
              Website development is a practical and scalable solution for building a strong online presence while supporting your long-term business growth. At Distinctive MS, our custom-built websites are designed to combine performance, functionality, and visual appeal, helping you attract visitors, engage users, and convert them into customers with confidence.
            </p>

            <Accordion items={faqs} />
          </div>

          {/* Right */}
          <div className="flex-1 md:pt-[75px]">
            {/* Desktop Image */}
            <img
              src="/images/website-development-hero.png"
              alt="Website Development Hero Image"
              className="hidden md:block w-full object-contain"
            />

            {/* Mobile Image */}
            <img
              src="/images/website-development-mobile.png"
              alt="Website Development Hero Image"
              className="block md:hidden w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="relative bg-[url('/images/contact-background.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative flex flex-col items-center justify-start z-10 md:pt-[84px] pt-[40px] md:pb-[97px] pb-[40px] max-w-[1440px] mx-auto md:px-10 px-3">
          <h2 className="font-segoe font-normal text-[48px] md:text-[64px] leading-[52px] md:leading-[64px] tracking-[-1px] text-center md:text-left text-white align-middle pb-[12px]">
            Get in touch <br className="block md:hidden" /> with us
          </h2>

          <p className="max-w-[675px] font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText pb-[24px]">
            Lorem ipsum dolor sit amet consectetur. Urna mattis neque arcu ac consectetur non fermentum. Nam porttitor ultrices consequat dui risus  Lorem ipsum dolor sit amet consectetur. Urna mattis neque arcu ac consectetur non fermentum. 
          </p>

          {/* Gradient Button */}
          <Link href="/contact-us">
            <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative">
        <div className="relative flex md:flex md:flex-row md:items-start md:justify-between flex-col justify-start items-center gap-8 bg-transparent z-10 md:pt-[134px] pt-[40px] md:pb-[102px] pb-[80px] max-w-[1440px] mx-auto md:px-10 px-3 md:gap-[54px]">
          {/* Left */}
          <div className="flex-1">
            <img
              src="/images/testimonials.png"
              alt="Testimonials"
              className="w-full object-contain"
            />
          </div>

          {/* Right */}
          <div className="flex-1">
            <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[53px] md:leading-[53px] tracking-[-2px] text-center md:text-left text-white align-middle pb-[16px]">
              Trusted by Growing Teams
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[32px]">
              See how our clients achieved real business growth through our design, development, and digital strategy expertise.
            </p>

            <div className="hidden md:block">
              <Testimonials items={testimonials} />
            </div>
            <div className="block md:hidden">
              <MobileTestimonials items={testimonials} />
            </div>
          </div>
        </div>
      </div>

      {/* Contact 2 */}
      <div className="relative">
        {/* background image */}
        <div className="absolute top-0 left-0 w-full lg:top-1/2 lg:w-full lg:max-w-[70%] -translate-y-0 lg:-translate-y-1/2 z-1">
          <img
            src="/images/service-hours.png"
            alt="Website Development Hero Image"
            className="w-full object-contain"
          />
        </div>

        {/* content */}
        <div className="relative z-10 lg:pt-[197px] pt-[150px] lg:pb-[197px] pb-[40px] max-w-[1440px] mx-auto lg:px-10 px-[28px] gap-[54px] flex flex-row justify-end">
          <div className="p-6 lg:px-[40px] lg:py-[51.5px] rounded-[12px] bg-[linear-gradient(180deg,#231535_0%,#101010_100%)] border border-[#FFFFFF26] lg:max-w-[541px] w-full">
            <h2 className="font-segoe font-smibold text-[40px] md:text-[40px] leading-[53px] tracking-[-2px] text-center md:text-left text-white align-middle pb-[16px]">
              DistinctiveMS
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[32px]">
              Business Hours: Monday - Thursday 9am to 4pm 
              Fridays - 9am to 12pm
            </p>

            <div className="flex flex-col items-start justify-start gap-6">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-[1.13px] border-[#9747FF80] rounded-[12px]">
                  <img
                    src="/icons/phone.svg"
                    alt="Phone Icon"
                    className="object-contain w-[15px] h-[15px]"
                  />
                </div>

                <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-[#F5F5F5]">
                  403-852-7408
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="w-[45px] h-[45px] flex items-center justify-center border-[1.13px] border-[#9747FF80] rounded-[12px]">
                  <img
                    src="/icons/mail.svg"
                    alt="Email Icon"
                    className="object-contain w-[16px] h-[16px]"
                  />
                </div>

                <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-[#F5F5F5]">
                  info@distinctivems.com
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="flex-none w-[45px] h-[45px] flex items-center justify-center border-[1.13px] border-[#9747FF80] rounded-[12px]">
                  <img
                    src="/icons/location.svg"
                    alt="Location Icon"
                    className="object-contain w-[20px] h-[20px]"
                  />
                </div>

                <p className="flex-1 font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-left text-[#F5F5F5]">
                  4310 104 Ave NE Bldg 2000 2nd floor, #2244, <br className="hidden md:block" />
                  Calgary, AB T3N 1W2, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sparkles */}
      <div className="w-full overflow-hidden z-3">
        {/* Container */}
        <div className="mx-auto mt-[50px] w-full max-w-2xl">
        </div>
        {/* Sparkles */}
        <div className="relative -mt-[50px] h-60 w-full overflow-hidden [mask-image:radial-gradient(100%_40%,white,transparent)] scale-y-[-1]">
          <div className="absolute inset-0 
              before:absolute before:inset-0 
              before:bg-[radial-gradient(circle_at_bottom_center,#9747FF_0%,#724EA1_30%,#101010_52.5%)] 
              before:opacity-40 
              before:[backdrop-filter:blur(50px)]" />
          <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-3 w-[200%] rounded-[100%] bg-[linear-gradient(180deg,#9747FF_0%,#101010_25.2%)] p-[1px]">
            <div className="bg-black rounded-[100%] w-full h-full" />
          </div>
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            color="#ffffff"
          />
        </div>
      </div>

      {/* Section H */}
      <div className="relative">
        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 pt-[0px] pb-[40px] md:pb-[76px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[12px] md:pb-[16px]">
            Your Next Growth Move Starts Here
          </h2>

          <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText pb-[24px]">
            Book a discovery call to explore the right growth strategy for your business.
          </p>
          
          {/* Gradient Button */}
          <Link href="/contact-us">
            <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
