"use client";

import { Sparkles } from "../components/landingPage/Sparkles";
import { PurpleGradientButton } from "../components/landingPage/PurpleGradientButton";
import { GridOverlay } from "../components/landingPage/GridOverlay";
import { ShadowOverlay } from "../components/landingPage/ShadowOverlay";
import { PurpleShadowOverlay } from "../components/landingPage/PurpleShadowOverlay";
import Link from "next/link";

export default function about() {
  return (
  <div className="bg-brand-dark">
    <div>
      {/* Hero */}
      <div className="relative">
        <img
          src="/images/web-design-hero.png"
          alt="Branding Hero Image"
          className="w-full object-contain pb-[56px] md:pb-[75px] z-10 relative"
        />
        {/* Ellipse Shadow Overlay */}
        <ShadowOverlay height="50%" top="0px" zIndex="z-2" />
        <PurpleShadowOverlay height="30%" top="55%" zIndex="z-2" />
        <GridOverlay top="top-[0px]" height="h-[100%]" opacity="opacity-[0.1]" zIndex="z-1" />
        {/* Wrapper */}
        <div className="relative bg-transparent z-10 md:pt-[75px] pt-[56px] md:pb-[0px] pb-[0px] max-w-[843px] mx-auto md:px-10 px-3">
          {/* Hero Text */}
          <h1 className="font-segoe font-normal md:text-[80px] text-[56px] md:leading-[82px] leading-[56px] tracking-[-1px] text-center text-white align-middle md:pb-[50px] pb-[24px]">
            About Rohit.
          </h1>

          <p className="font-segoe font-[500] text-[16px] leading-[22px] tracking-[0.03em] text-center text-[#AA5BFF] align-middle pb-[17px]">
            Founder & Team Lead
          </p>

          <div className="font-segoe font-[500] text-[16px] leading-[24px] text-center text-[#AAAAAA] align-middle">
            When I founded DMS, the mission was simple: serve the business owners who were being 
            
            <br />
            
            <span className="font-bold underline text-white">overlooked, overcharged,</span>
            <span className="text-white"> and </span>
            <span className="font-bold underline text-white">under-serviced.</span>
            
            <br /> 
            <br />
            
            The goal was equally simple: help business owners build digital foundations that actually compound over time.

            <br /> 
            <br />

            I kept seeing the same issue. Companies were investing in websites and digital work, but there was no long-term thinking. No scalability. No ownership. Just short-term execution disguised as strategy.

            <br /> 
            <br />

            As a business owner myself, I have always believed your website is not just design. It is infrastructure.

            <br /> 
            <br />

            <span className="italic text-[#AA5BFF] text-[24px] leading-[40px]">It should support growth.</span>

            <br /> 

            <span className="italic text-[#AA5BFF] text-[24px] leading-[40px]">It should convert consistently.</span>

            <br />

            <span className="italic text-[#AA5BFF] text-[24px] leading-[40px]">It should be built with intention.</span>

            <br />
            <br />

            <span className="font-bold text-white text-[18px] leading-[24px]">DMS was built around that philosophy.</span>

            <br />
            <br />

            Over the years, we have had the privilege of working with high-level operators across multiple industries, from service-based businesses and scaling regional companies to national brands like Ford and UL Engineering, as well as public companies listed on the NASDAQ, CSE and TSX.

            <br />
            <br />

            We have rebuilt digital ecosystems from the ground up, strengthened online presence for growing companies, and helped businesses move from scattered assets to structured, performance-driven foundations.

            <br />
            <br />

            We have grown quickly. Our client base has expanded. The caliber of businesses we work with continues to rise.

            <br />
            <br />
            <span className="underline text-[#AA5BFF] text-[20px] leading-[24px]">But the mission has not changed.</span>
            <br />
            <br />

            We still exist to serve those who want things built properly.
            <br />
            We still prioritize long-term systems over short-term wins.
            <br />
            And we still believe that when your digital foundation is solid, everything else becomes easier to scale.
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="relative">
        <GridOverlay top="top-[0px]" height="h-[100%]" opacity="opacity-[0.1]" zIndex="z-1" />
        <ShadowOverlay height="10%" top="10%" zIndex="z-2" />
        <ShadowOverlay height="10%" top="80%" zIndex="z-2" />

        {/* Wrapper */}
        <div className="relative flex flex-col items-stretch justify-start gap-8 md:flex-row md:items-center md:justify-between md:gap-20 bg-transparent z-10 pt-[40px] md:pt-[93px] pb-[0px] md:pb-[93px] max-w-[1440px] mx-auto md:px-10 px-3">
          <div className="w-1/2">
            <img
              src="/images/web-design-mission.png"
              alt="Branding Hero Image"
              className="w-full object-contain"
            />
          </div>

          <div className="w-1/2">
            <div className="pb-10 border-b border-white/30">
              <h2 className="font-segoe font-normal md:text-[48px] text-[40px] md:leading-[56px] leading-[40px] tracking-[-2px] pb-4 text-left text-white">
                Our Mission
              </h2>

              <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText">
                To serve business owners by raising the standard in web development through transparency, ownership, responsiveness, and long-term thinking
              </p>
            </div>

            <div className="pt-10">
              <h2 className="font-segoe font-normal md:text-[48px] text-[40px] md:leading-[56px] leading-[40px] tracking-[-2px] pb-4 text-left text-white">
                Our Vision
              </h2>

              <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center md:text-left text-brand-cardText">
                To continue growing our boutique digital firm, working alongside serious business owners to build scalable foundations for long-term growth, while maintaining a focused team that values craftsmanship, trust, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy */}
      <div className="relative">
        {/* Wrapper */}
        <div className="relative bg-[url('/images/web-design-strategy.png')] bg-cover bg-center bg-no-repeat z-10 pt-[40px] md:pt-[369px] pb-[0px] md:pb-[93px] max-w-[1440px] mx-auto md:px-10 px-3">
          <h2 className="font-segoe font-normal md:text-[64px] text-[36px] md:leading-[70px] leading-[44px] tracking-[-2px] pb-4 text-left text-white md:pb-[78px] pb-[67px]">
            Built on Design, <br />
            Strategy, and Growth
          </h2>

          <div className="flex flex-col items-stretch justify-start gap-3 md:flex-row md:items-center md:justify-center">
            <div className="w-1/3 flex flex-col items-center">
              <img
                src="/images/strategic-development.svg"
                alt="Branding Hero Image"
                className="w-full object-contain max-w-[30px] pb-4"
              />

              <h2 className="font-segoe font-normal text-[18px] leading-[24px] pb-4 text-left text-white">
                Strategic Design
              </h2>

              <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText">
                We design with purpose. From brand guides to UI systems, every visual element is aligned with your positioning, audience psychology, and business goals.
              </p>
            </div>

            <div className="bg-white/20 w-[1px] h-[151px]"></div>

            <div className="w-1/3 flex flex-col items-center">
              <img
                src="/images/strategic-development.svg"
                alt="Branding Hero Image"
                className="w-full object-contain max-w-[30px] pb-4"
              />

              <h2 className="font-segoe font-normal text-[18px] leading-[24px] pb-4 text-left text-white">
                Strategic Design
              </h2>

              <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText">
                We design with purpose. From brand guides to UI systems, every visual element is aligned with your positioning, audience psychology, and business goals.
              </p>
            </div>

            <div className="bg-white/20 w-[1px] h-[151px]"></div>

            <div className="w-1/3 flex flex-col items-center">
              <img
                src="/images/strategic-development.svg"
                alt="Branding Hero Image"
                className="w-full object-contain max-w-[30px] pb-4"
              />

              <h2 className="font-segoe font-normal text-[18px] leading-[24px] pb-4 text-left text-white">
                Strategic Design
              </h2>

              <p className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText">
                We design with purpose. From brand guides to UI systems, every visual element is aligned with your positioning, audience psychology, and business goals.
              </p>
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
