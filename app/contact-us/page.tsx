"use client";

import { Sparkles } from "../components/landingPage/Sparkles";

export default function ContactUs() {
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
        <div className="relative flex bg-transparent flex flex-col items-center justify-start z-10 md:pt-[56px] pt-[40px] md:pb-[47px] pb-[40px] max-w-[1440px] mx-auto md:px-10 px-3">
          <div className="rounded-[12px] 
         bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,rgba(170,91,255,0.2)_0%,rgba(151,71,255,0.2)_52.42%,rgba(124,14,221,0.2)_100%)] 
         shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66] font-segoe font-semibold text-[14px] leading-[1em] text-center text-white mb-[32px] py-2.5 px-[29px] rounded-[12px]">
            Let’s connect
          </div>

          <h1 className="font-segoe font-normal text-[56px] md:text-[64px] leading-[64px] md:leading-[71px] tracking-[-1px] text-center text-white align-middle pb-[24px]">
            Get in Touch
          </h1>

          <p className="max-w-[581px] font-segoe font-normal md:text-[20px] text-[16px] leading-[24px] tracking-[0px] text-center text-brand-cardText pb-[32px] md:pb-[57px]">
            Have a question or need more information? Fill out the form below, and we’ll get back to you as soon as possible!
          </p>

          <div className="flex flex-col items-stretch lg:flex-row lg:items-start lg:justify-start gap-[53px] w-full">
            <div className="flex-[2]">
              <form
              className="flex flex-col gap-[15px] w-full max-w-3xl mx-auto"
              onSubmit={async (e) => {
                e.preventDefault();
                // window.location.href = "/thank-you";
                const form = e.currentTarget;
                const data = {
                  fullName: (form.fullName as HTMLInputElement).value,
                  address: (form.address as HTMLInputElement).value,
                  phone: (form.phone as HTMLInputElement).value,
                  message: (form.message as HTMLTextAreaElement).value,
                };

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    window.location.href = "/thank-you"; // redirect on success
                  } else {
                    alert("Failed to send message.");
                  }
                } catch (err) {
                  console.error(err);
                  alert("An error occurred while sending the message.");
                }
              }}
              >
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="fullName"
                      className="font-segoe font-normal text-[16px] leading-[1.5em] text-left text-white mb-2.5"
                    >
                      Full Name<span className="text-[#F49725]">*</span>
                    </label>

                    <div className="relative">
                      {/* Left icon */}
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {/* Replace this with your actual SVG or imported component */}
                        <img src="/icons/person.svg" alt="User Icon" className="w-[14px] h-[14px]" />
                      </span>

                      {/* Input */}
                      <input
                        type="text"
                        id="fullName"
                        required
                        placeholder="Your name"
                        className="p-[14px] pl-10 rounded-[6px] bg-[#181818] font-segoe font-normal text-[14px] leading-[1.5em] text-left text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="address"
                      className="font-segoe font-normal text-[16px] leading-[1.5em] text-left text-white mb-2.5"
                    >
                      Address<span className="text-[#F49725]">*</span>
                    </label>

                    <div className="relative">
                      {/* Left icon */}
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {/* Replace this with your actual SVG or imported component */}
                        <img src="/icons/gray-mail.svg" alt="Gray Mail Icon" className="w-[14px] h-[14px]" />
                      </span>

                      {/* Input */}
                      <input
                        type="email"
                        id="address"
                        required
                        placeholder="Email address"
                        className="p-[14px] pl-10 rounded-[6px] bg-[#181818] font-segoe font-normal text-[14px] leading-[1.5em] text-left text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                      />
                    </div>
                  </div>

                </div>

                {/* Row 2 */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-segoe font-normal text-[16px] leading-[1.5em] text-left text-white mb-2.5">
                    Phone no<span className="text-[#F49725]">*</span>
                  </label>
                  <div className="relative">
                      {/* Left icon */}
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {/* Replace this with your actual SVG or imported component */}
                        <img src="/icons/gray-phone.svg" alt="Gray Mail Icon" className="w-[14px] h-[14px]" />
                      </span>

                      {/* Input */}
                      <input
                        type="tel"
                        id="phone"
                        required
                        pattern="[0-9+()-\s]{7,}"
                        placeholder="Phone number"
                        className="p-[14px] pl-10 rounded-[6px] bg-[#181818] font-segoe font-normal text-[14px] leading-[1.5em] text-left text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                      />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-segoe font-normal text-[16px] leading-[1.5em] text-left text-white mb-2.5">
                    Message<span className="text-[#F49725]">*</span>
                  </label>
                  <div className="relative">
                      {/* Left icon */}
                      <span className="absolute left-3 top-1/5 -translate-y-1/2 text-gray-400">
                        {/* Replace this with your actual SVG or imported component */}
                        <img src="/icons/message.svg" alt="Gray Mail Icon" className="w-[14px] h-[14px]" />
                      </span>

                      {/* Text Area */}
                      <textarea
                        id="message"
                        required
                        placeholder="How can we help you today?"
                        rows={5}
                        className="p-[14px] pl-10 rounded-[6px] bg-[#181818] font-segoe font-normal text-[14px] leading-[1.5em] text-left text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none w-full"
                      />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="rounded-[12px] p-[1.5px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] inline-block">
                  <button
                    type="submit"
                    className="w-full rounded-[12px] bg-[radial-gradient(102.5%_350.82%_at_0%_81.25%,#AA5BFF_0%,#9747FF_52.42%,#7C0EDD_100%)] 
                              shadow-[0_0_14px_0_#FFFFFF4D_inset,0_0_30.3px_0_#9747FF66] 
                              text-white font-semibold py-3 px-6 transition-all duration-300
                              font-segoe font-semibold text-[14px] leading-[1em]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:max-w-[414px] w-full flex-[1]">
              <p className="font-segoe font-normal text-[20px] leading-[24px] text-left text-white align-middle pb-[12px]">
                Other ways to reach us
              </p>

              <p className="font-segoe font-normal text-[14px] leading-[24px] text-left text-[#AAAAAA] align-middle pb-[24px]">
                Choose the method that works best for you.
              </p>

              <div className="flex flex-col justify-start items-stretch gap-5 pb-[26px]">
                <div className="p-6 rounded-[12px] bg-[#191919] border border-[#FFFFFF1A]">
                  <p className="font-segoe font-semibold text-[20px] leading-[24px] text-left text-white pb-4">
                    Email Us
                  </p>

                  <div className="flex flex-row items-stretch justify-start gap-[10px]">
                    <div className="p-[15px] border-[1.13px] border-[#9747FF80] rounded-[12px] bg-[#9747FF14]">
                      <img
                        src="/icons/mail.svg"
                        alt="Email Icon"
                        className="w-full object-contain max-w-[15px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-start">
                      <p className="font-segoe font-normal text-[12px] leading-[1.5em] text-left text-[#999999]">
                        Get in touch via email
                      </p>

                      <p className="font-segoe font-semibold text-[14px] leading-[1.5em] text-left text-[#F5F5F5]">
                        info@distinctivems.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-[12px] bg-[#191919] border border-[#FFFFFF1A]">
                  <p className="font-segoe font-semibold text-[20px] leading-[24px] text-left text-white pb-4">
                    Call Us
                  </p>

                  <div className="flex flex-row items-stretch justify-start gap-[10px]">
                    <div className="p-[15px] border-[1.13px] border-[#9747FF80] rounded-[12px] bg-[#9747FF14]">
                      <img
                        src="/icons/phone.svg"
                        alt="Phone Icon"
                        className="w-full object-contain max-w-[15px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-start">
                      <p className="font-segoe font-normal text-[12px] leading-[1.5em] text-left text-[#999999]">
                        Speak directly with our team
                      </p>

                      <p className="font-segoe font-semibold text-[14px] leading-[1.5em] text-left text-[#F5F5F5]">
                        403-852-7408
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-[12px] bg-[#191919] border border-[#FFFFFF1A]">
                  <p className="font-segoe font-semibold text-[20px] leading-[24px] text-left text-white pb-4">
                    Visit Us
                  </p>

                  <div className="flex flex-row items-center justify-start gap-[10px] pb-6">
                    <div className="p-[15px] border-[1.13px] border-[#9747FF80] rounded-[12px] bg-[#9747FF14]">
                      <img
                        src="/icons/location.svg"
                        alt="Location Icon"
                        className="w-full object-contain max-w-[15px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between items-start">
                      <p className="font-segoe font-normal text-[12px] leading-[1.5em] text-left text-[#999999]">
                        Our headquarters
                      </p>

                      <p className="font-segoe font-semibold text-[14px] leading-[1.5em] text-left text-[#F5F5F5]">
                        4310 104 Ave NE Bldg 2000 2nd floor, #2244, <br className="hidden md:block" />
                        Calgary, AB T3N 1W2, Canada
                      </p>
                    </div>
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
        </div>
      </div>
    </div>
  </div>
  );
}
