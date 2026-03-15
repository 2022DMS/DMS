"use client";

import { Sparkles } from "../components/landingPage/Sparkles";
import { PurpleGradientButton } from "../components/landingPage/PurpleGradientButton";
import Accordion from "../components/landingPage/Accordion";
import Testimonials from "../components/landingPage/webDesign/Testimonials";
import MobileTestimonials from "../components/landingPage/MobileTestimonials";
import { GridOverlay } from "../components/landingPage/GridOverlay";
import { ShadowOverlay } from "../components/landingPage/ShadowOverlay";
import { VerticalTimeline } from "../components/landingPage/VerticalTimeline";
import { Carousel } from "../components/landingPage/Carousel";

import { faqs, testimonials, carouselData, timelineData } from "./pageData";
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

            <div className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[16px] md:pb-[24px]">
              <p>
                If you’ve worked with web developers before, you know how frustrating the process can be. Missed expectations, poor communication, and a final product that doesn’t match the vision you had in mind.
              </p>

              <br />

              <p className="font-bold underline">
                We take a different approach.
              </p>

              <br />

              <p>
                Our team focuses on:
              </p>

              <ul className="list-disc pl-6">
                <li>
                  clear communication
                </li>
                <li>
                  complete custom design with no templates
                </li>
                <li>
                  structured processes that ensures your website reflects exactly what your business needs
                </li>
              </ul>

              <br />

              <p>
                We work closely with you from start to finish to bring your vision to life, and we continue to support your website after launch to keep it updated, secure, and performing properly.
              </p>

            </div>

            {/* Buttons */}
          <div className="flex md:flex-row md:items-center flex-col justify-start items-stretch gap-4 pb-[38px]">

              {/* Gradient Button */}
              <Link href="/">
                <PurpleGradientButton maxWidthClass="177px" imageSrc="/icons/north-east-arrow.svg" imageAlt="Arrow Icon" text="Our Process" />
              </Link>

              {/* Dark Button */}
              <Link href="/contact-us">
                <div className="z-10">
                  <div className="
                      min-h-[39px] h-full
                      flex items-center gap-3 justify-center
                      shadow-[0_0_14px_0_#8F8F8F4D_inset]
                      border-[0.5px] border-[#FFFFFF4D]
                      rounded-xl 
                      text-white font-semibold
                      bg-[#101010]
                      px-[29px] py-[10px]
                      w-full h-full
                      cursor-pointer
                    ">
                      Commonly Asked Questions
                    <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
                  </div>
                </div>
              </Link>
            </div>
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

      {/* Projects Carasual */}
      <div className="relative">
        {/* Gridline Overlay */}
        <GridOverlay top="top-[-612px]" height="h-[1097px]" opacity="opacity-[0.1]" zIndex="z-1" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 pt-[0px] md:pt-[47px] pb-[40px] md:pb-[58px] max-w-[1440px] w-full mx-auto md:px-5">
          {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[64px] leading-[35px] md:leading-[109px] tracking-[-1px] md:tracking-[-2px] md:px-5 text-left text-white pb-[50px]">
            Real Projects, Real Results
          </h2>

          <Carousel items={carouselData} />
        </div>
      </div>

      {/* FAQ */}
      <div className="relative">
        <div className="relative flex md:flex md:flex-row md:items-start md:justify-between flex flex-col justify-start items-center gap-8 bg-transparent z-10 md:pt-[98px] pt-[40px] md:pb-[63px] pb-[0px] max-w-[1440px] mx-auto md:px-10 px-3 gap-[39px]">
          {/* Left */}
          <div className="flex-1">
            <h6 className="font-segoe font-normal text-[20px] leading-[20px] tracking-[-2px] text-center md:text-left text-white align-middle">
              Common Questions:
            </h6>

            <h2 className="font-segoe font-normal text-[56px] md:text-[48px] leading-[56px] md:leading-[56px] tracking-[-2px] text-center md:text-left text-white align-middle pb-[11px]">
              About Our Website <br />Dev Process
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText">
              Here are a few of the most common questions business owners ask before starting a website project.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 md:pt-[28px]">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>

      {/* Section E */}
      <div className="relative">
        <GridOverlay top="top-[-20px]" height="h-[1200px]" opacity="opacity-[0.1]" zIndex="z-1" />
        <ShadowOverlay height="30%" top="10%" zIndex="z-2" />

        <div className="relative flex flex-col items-center justify-start md:flex-row gap-[30px] md:gap-[114px] md:justify-center md:items-start bg-transparent pt-[40px] pb-[40px] md:pt-[84px] md:pb-[49px] max-w-[1440px] mx-auto md:px-10 px-3 z-10">
          <div className="w-full md:max-w-[501px] flex flex-col items-center md:items-start md:justify-start md:sticky md:top-[10px] z-10">
            <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center md:text-left text-white align-middle pb-[16px]">
              Our process for designing <br /> your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9747FF] to-[#EBAFFF]">perfect</span> website.
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText pb-[24px]">
              Our goal is to make the perfect site for your <br className="md:hidden" /> business, well within your deadline.
            </p>

            <Link href="/contact-us">
              <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
            </Link>
          </div>

          <VerticalTimeline cards={timelineData} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative">
        <div className="relative flex md:flex md:flex-row md:items-start md:justify-between flex-col justify-start items-center gap-8 bg-transparent z-10 md:pt-[134px] pt-[40px] md:pb-[102px] pb-[80px] max-w-[1440px] mx-auto md:px-10 px-3 md:gap-[54px]">
          <Testimonials items={testimonials} />
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

              <div className="py-[8px] w-full rounded-[12px] flex justify-center bg-[linear-gradient(90deg,rgba(151,71,255,0.1)_0%,rgba(210,113,255,0.1)_100%)]">
                <p className="font-segoe font-normal text-[14px] leading-[24px] tracking-[0px] text-left text-white">
                  <span className="text-[#E47732]">*</span> In-Person Meetings by Appointment Only.
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
