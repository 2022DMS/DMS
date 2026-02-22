"use client";

import React from "react";
import { ContainerScroll } from "../../components/landingPage/ContainerScrollAnimation";
import { SpotlightCard } from "../../components/landingPage/SpotlightCard";
import { InteractiveImageAccordion } from "../../components/landingPage/InteractiveImageAccordion";
import { Sparkles } from "../../components/landingPage/Sparkles";
import { Carousel } from "../../components/landingPage/Carousel";
import { VerticalTimeline } from "../../components/landingPage/VerticalTimeline";
import { ClientCard } from "../../components/landingPage/ClientCard";
import { PurpleGradientButton } from "../../components/landingPage/PurpleGradientButton";
import { GridOverlay } from "../../components/landingPage/GridOverlay";
import { ShadowOverlay } from "../../components/landingPage/ShadowOverlay";
import { VideoWithOverlay } from "../../components/landingPage/VideoWithOverlay";
import { carouselData, timelineData, accordionData } from "./pageData";

export default function Home() {
  return (
  <div className="bg-brand-dark">
    <div className="">
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

      {/* Section A + B */}
      <div className="relative">
        {/* Ellipse Shadow Overlay */}
        <ShadowOverlay height="80%" top="0px" zIndex="z-2" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 md:pt-[98px] pt-[71px] md:pb-[0px] pb-[0px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h1 className="font-segoe font-normal md:text-[80px] text-[32px] md:leading-[82px] leading-[35px] tracking-[-1px] text-center text-white align-middle md:pb-[50px] pb-[24px]">
            Custom web development, <br /> done with care.
          </h1>

          {/* Buttons */}
          <div className="flex md:flex-row md:items-center md:justify-between flex-col justify-start items-stretch gap-4 pb-[38px]">

            {/* Gradient Button */}
            <PurpleGradientButton maxWidthClass="177px" imageSrc="/icons/north-east-arrow.svg" imageAlt="Arrow Icon" text="View our work" />

            {/* Dark Button */}
            <div className="z-10">
              <button className="
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
                Book a Call
                <img src="/icons/phone.svg" alt="Phone Icon" className="w-3 object-contain" />
              </button>
            </div>
          </div>

          {/* ContainerScroll */}
          <ContainerScroll>
            <VideoWithOverlay src="https://dms-home-video.s3.us-west-1.amazonaws.com/homepage_video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWHXRWPF7DG2EVQPO%2F20260222%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260222T233145Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMSJHMEUCIHOY5SqoUcYcVDa%2Fro1Va0X1BAO3s25jGN1VvQC0E5icAiEAo9JbfpA7qffvXBQD1R4aoGl%2FDyLWGFw61EC4HQfInMcq4wII0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0Mjg5Mjk4NzQzMDIiDAypogUX8DFl1PBMRSq3An5Zcuu48Jf3pbEXpS%2Fm50pKqPlsY9%2BhIUa0D9%2BWSAKtjokh%2B9qaiwYWfPnaaH%2FJuvtus%2Fm9lDawqkIFmJg57MKeKA%2FxG6uTEB7XkthC4hlTByN4Y%2FT6is4dOewE3%2FXdY1jABljqyH1Wtqz2Dttlg%2BwWEEutM6M5zpveiTe9arL0tkc7pQMEJseeDNNWFqhzW4XiB8rWWrIM2FCGLL5v72huwXIWb2mxgDcG1wLtVnnKfC2CSIxOhKzKplLypm9C9hmpksQBtg7BKz4eAwjtezKmbaoK9TX68kAvfVB6K1AU7hhFkCCISFCs30ppy3M9RGFwyE3v8XerqJg8yqX7Lu8ZVGKcO9yrf2ndrRnm7AWM0aPpjGHgn%2F7r4D7R1TXfBhACb1Hb%2Bbzyj1DS%2FQWW07y6SJ%2BL%2FwX7MLKd7swGOq0CzjgOUum0YLGOaIbzlKQ%2BTatLZXLmqXYi4H9wbc4AIF5Ycz3wccra7y1PC%2FUM6tg1rqPDAKP5J0KYRx8tqBZa8SbswJJXJiCrMpupPKsTsZDl7NWtL4KSt4o6k3ajOxvhHb5XN%2FYH3KAmJ4ZLwjdkaZ1UKOOSR4pGi4yzYfFSpulNE0lYjFV5vMmf8Ixv%2BZYwWQk1H91CUhMHrvVeBgnbzBfVn5D%2BWrmln4iE2MRWof%2F83a%2Beoe5QzUh8S3QijkNVPVBDjn%2BSbFmBx43QV8eEJG7KXS0PhUoAoncAsnXGqV0wLI9ExwJbulYQ5N%2BTcQ7ULh0KhH0ht8TnDy15icVx4M2p0WtY%2BaAHfWTWGdPdl%2FxbYMAzLk4Vc%2F3OSnO%2BPLoVFhZfbm2kvg0alF6bPQ%3D%3D&X-Amz-Signature=97fb17b2fd8fe76afe4d4134da6125c6ee8f58a7ac560eaefbf9d7fa68a9a815&X-Amz-SignedHeaders=host&response-content-disposition=inline" overlayImage="/images/play_button.png" />
          </ContainerScroll>
        </div>
      </div>

      {/* Section C */}
      <div className="relative">
        {/* Gridline Overlay */}
        <GridOverlay top="top-[-612px]" height="h-[1097px]" opacity="opacity-[0.1]" zIndex="z-1" />
        {/* Ellipse Shadow Overlay */}
        <ShadowOverlay height="30%" top="90%" zIndex="z-2" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 pt-[0px] md:pt-[47px] pb-[40px] md:pb-[58px] max-w-[1440px] mx-auto md:px-10">
          {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[64px] leading-[35px] md:leading-[109px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px]">
            Client Work
          </h2>

          <Carousel items={carouselData} />
        </div>
      </div>

      {/* Section D */}
      <div className="relative">
        {/* Gridline Overlay */}
        <GridOverlay top="top-[-20px]" height="h-[775px]" opacity="opacity-[0.1]" zIndex="z-1" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 pt-[40px] pb-[40px] md:pt-[98px] md:pb-[98px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[64px] leading-[35px] md:leading-[109px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px]">
            Why Choose Us?
          </h2>

          <div className="flex flex-col justify-start items-center md:flex-row gap-6 md:items-stretch md:justify-center">
            <SpotlightCard 
              spotlightColor="rgba(151, 71, 255, 0.2)" 
              image="/images/super-communicative.png" 
              imageAlt="Super Communicative" 
              header="Super Communicative" 
              paragraph="You can find us via email, phone calls, text messages, WhatsApp, whenever! You will never get a radio silence from us." 
            />

            <SpotlightCard 
              spotlightColor="rgba(151, 71, 255, 0.2)" 
              image="/images/transparent-pricing.png" 
              imageAlt="Transparent Pricing" 
              header="Transparent Pricing" 
              paragraph="We provide clear, upfront pricing so you always know what you're paying for, with no hidden surprises." 
            />

            <SpotlightCard 
              spotlightColor="rgba(151, 71, 255, 0.2)" 
              image="/images/forward-looking.png" 
              imageAlt="Forward Looking" 
              header="Forward Looking" 
              paragraph="We provide forward-looking strategies to ensure you stay ahead, leveraging future trends for sustained growth and success." 
            />
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

            <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
          </div>

          <VerticalTimeline cards={timelineData} />
        </div>
      </div>

      {/* Section F */}
      <div className="relative">
        {/* Ellipse Shadow Overlay */}
        <ShadowOverlay height="100%" top="0%" zIndex="z-2" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-center bg-transparent z-10 pt-[40px] md:pt-[105px] pb-[0px] max-w-[1440px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center text-white align-middle pb-[50px] md:pb-[61px]">
            Some of our clients
          </h2>

          <div className="max-w-[1240px] w-full flex flex-wrap gap-x-[11px] gap-y-[13px] md:gap-y-[40px] md:gap-x-[7.68px]">
            <ClientCard
              imageSrc="/images/ul.png"
              imageAlt="UL"
              maxWidthClass = "max-w-[50px]"
            />

            <ClientCard
              imageSrc="/images/ford.png"
              imageAlt="Ford"
              maxWidthClass = "max-w-[100px]"
            />

            <ClientCard
              imageSrc="/images/lg.png"
              imageAlt="LG"
              maxWidthClass = "max-w-[83px]"
            />

            <ClientCard
              imageSrc="/images/fc.png"
              imageAlt="FC25"
              maxWidthClass = "max-w-[74px]"
            />

            <ClientCard
              imageSrc="/images/mlb.png"
              imageAlt="MLB"
              maxWidthClass = "max-w-[72px]"
            />

            <ClientCard
              imageSrc="/images/goldline-resources.png"
              imageAlt="Goldline Resources"
              maxWidthClass = "max-w-[50px]"
            />

            <ClientCard
              imageSrc="/images/canada.png"
              imageAlt="Canada"
              maxWidthClass = "max-w-[100px]"
            />

            <ClientCard
              imageSrc="/images/university-of-michigan.png"
              imageAlt="University of Michigan"
              maxWidthClass = "max-w-[83px]"
            />

            <ClientCard
              imageSrc="/images/alberta-government.png"
              imageAlt="Alberta Government"
              maxWidthClass = "max-w-[74px]"
            />

            <ClientCard
              imageSrc="/images/university-of-calgary.png"
              imageAlt="University of Calgary"
              maxWidthClass = "max-w-[72px]"
            />
          </div>
        </div>
      </div>

      {/* Sparkles */}
      <div className="w-full overflow-hidden z-3">
        {/* Container */}
        <div className="mx-auto mt-[50px] w-full max-w-2xl">
        </div>
        {/* Sparkles */}
        <div className="relative -mt-[50px] h-60 w-full overflow-hidden [mask-image:radial-gradient(100%_40%,white,transparent)]">
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

      {/* Section G */}
      <div className="relative">
        {/* Wrapper */}
        <div className="relative flex flex-col justify-start gap-[42px] lg:flex-row lg:justify-center items-center lg:gap-[123px] bg-transparent z-10 pt-[40px] pb-[40px] md:pt-[52px] md:pb-[52px] max-w-[1440px] mx-auto md:px-15 px-3">
          <div className="w-full lg:max-w-[329px] flex flex-col items-center lg:items-start justify-start">
            {/* Hero Text */}
            <h2 className="font-segoe font-normal text-[32px] md:text-[48px] leading-[35px] md:leading-[56px] tracking-[-1px] md:tracking-[-2px] text-center lg:text-left text-white align-middle pb-[12px] md:pb-[16px]">
              Our Services
            </h2>

            <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center lg:text-left text-brand-cardText pb-[24px]">
              Practical, end-to-end solutions tailored to your business needs.
            </p>

            {/* Gradient Button */}
            <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
          </div>

          <InteractiveImageAccordion accordionCards = {accordionData} />
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
          <PurpleGradientButton maxWidthClass="152px" imageSrc="/icons/phone.svg" imageAlt="Phone Icon" text="Book a Call" />
        </div>
      </div>
    </div>
  </div>
  );
}
