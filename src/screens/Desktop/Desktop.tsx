import { MailIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

  
// Define service data for mapping
const services = [
  {
    title: "Maternity Care",
    description:
      "Holistic support and medical care for a \n healthy pregnancy, childbirth, and \n post-pregnancy recovery.",
  },
  {
    title: "Laparoscopic Surgery",
    description:
      "Minimally invasive keyhole surgery for \n quicker recovery and less pain.",
  },
  {
    title: "Infertility: IUI & IVF",
    description:
      "Advanced treatments to help couples \n conceive, including In Vitro Fertilization (IVF) \n and Intrauterine Insemination (IUI).",
  },
  {
    title: "Cosmetic Gynaecology  \n & Vaginal Aesthetics",
    description:
      "Treatments to enhance the appearance and \n function of intimate areas.",
    multiline: true,
  },
  {
    title: "Arvati-ThermiVa",
    description:
      "Non-surgical, radiofrequency treatment for \n vaginal rejuvenation and improved intimate \n wellness.",
  },
];

// Define navigation items
const navItems = [
  { label: "Home", active: true },
  { label: "About", active: false },
  { label: "Services", active: false },
  { label: "Clinic", active: false },
  { label: "Gallery", active: false },
  { label: "Testimonials", active: false },
];

export const Desktop = (): JSX.Element => {
  const [activeNav, setActiveNav] = React.useState("Home");

  return (
    <div className="bg-[#FFFFFF] flex flex-row justify-center w-full font-inter">
      <div className="bg-[#FFFFFF] w-full max-w-[1440px] relative">
        {/* Fixed Navigation - Hidden on mobile and tablet */}
        <header className="fixed top-[30px] left-0 right-0 z-50 flex justify-center lg:flex md:hidden sm:hidden xs:hidden">
          <div className="flex w-[50px] h-[10px] items-center justify-center px-4 py-2 bg-[#F5F5F5] rounded-[50px] absolute left-16">
            <img
              src="/Dr Devki Logo.png"
              alt="Dr Devki Logo"
              className="h-[30px] w-auto object-contain"
            />
            <span className="ml-2 font-inter font-normal text-[#2b2b2b] text-base">
              Dr. Devki Potwar
            </span>
          </div>

          <NavigationMenu className="h-[55px] px-4 py-5 bg-[#F5F5F5] rounded-[50px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ml-[50px]">
            <NavigationMenuList className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveNav(item.label)}
                    className={
                      activeNav === item.label
                        ? "rounded-[50px] bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] text-white font-inter font-light px-4 py-2 text-base hover:bg-[linear-gradient(90deg,rgba(152,77,149,0.9)_0%,rgba(211,156,192,0.9)_100%)]"
                        : "rounded-[50px] bg-transparent text-[#2b2b2b] font-inter font-light px-4 py-2 text-base hover:bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] hover:text-white transition-all duration-200"
                    }>
                    {item.label}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="inline-flex h-[53px] items-center gap-[15px] px-5 py-1.5 fixed top-[34px] right-12 rounded-[50px] bg-[#F5F5F5] hover:bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] group transition-all duration-300">
            <span className="font-inter font-thin text-[#2b2b2b] text-base group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
            <div className="p-2.5 rounded-full bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] group-hover:bg-none group-hover:bg-white transition-all duration-300">
              <PhoneIcon className="w-4 h-4 fill-white group-hover:fill-[#984D95] transition-all duration-300" />
            </div>
          </Button>
        </header>

        {/* Hero Section - Reference Layout */}
        <section className="relative flex flex-col items-center justify-start pt-8 pb-12 px-4 bg-white min-h-[90vh] overflow-visible">

           {/* Top-left logo button */}
          <div className="absolute top-6 left-6 z-20 flex items-center bg-[#F5F5F5] rounded-full px-4 py-2 shadow-md gap-2">
            <img src="/Dr Devki Logo.png" alt="Dr Devki Logo" className="h-7 w-auto object-contain" />
            <span className="font-inter font-normal text-[#2b2b2b] text-base">Dr. Devki Potwar</span>
          </div>

          {/* Top-right call button */}
          <button className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#984D95] to-[#D39CC0] shadow-lg hover:scale-105 transition-transform">
            <PhoneIcon className="w-6 h-6 text-white" />
          </button>

          {/* Decorative line behind images */}
          <img src="/HeroLine.png" alt="Decorative line" className="absolute left-0 right-0 mx-auto top-24 w-[90%] max-w-[400px] opacity-80 z-0" />

          {/* 2x2 Image Grid */}
          <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-3 mt-16 mb-8 w-[90vw] max-w-[340px]">
            <img src="/FirstCol(1).jpg" alt="Clinic 1" className="rounded-[18px] object-cover w-full h-[175px] shadow-md mt-[100px]" />
            <img src="/FirstCol(2).jpg" alt="Clinic 2" className="rounded-[18px] object-cover w-full h-[175px] shadow-md" />
            <img src="/SecondCol(1).jpg" alt="Clinic 3" className="rounded-[18px] object-cover w-full h-[175px] shadow-md mt-[-100px]" />
            <img src="/SecondCol(2).jpg" alt="Clinic 4" className="rounded-[18px] object-cover w-full h-[175px] shadow-md" />
          </div>

          {/* Text content with background */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-[340px] px-2 py-6 rounded-[24px] bg-gradient-to-br from-[#fff] via-[#F5E6F2] to-[#F5E6F2] shadow-lg">
            <h1 className="text-[24px] font-semibold text-[#2b2b2b] text-center leading-tight mb-2" style={{background: 'linear-gradient(90deg, rgba(152,77,149,0.12) 0%, rgba(211,156,192,0.12) 100%)', borderRadius: '12px', padding: '8px 0'}}>
              Just your gynaec,<br />gone digital
            </h1>
            <p className="text-[#747474] text-sm text-center mb-4">Keep scrolling to know how I can help you.</p>
            <Button className="w-full max-w-[220px] flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] hover:bg-gradient-to-r from-[#984D95] to-[#D39CC0] text-white font-light text-base py-2 px-4 transition-all duration-300">
              Book Appointment
              <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full ml-2">
                <img src="/arrow.svg" alt="Arrow" className="w-3 h-3" />
              </span>
            </Button>
          </div>
        </section>

        {/* Quote Section - Responsive */}
        <section className="mx-4 lg:mx-16 md:mx-8 sm:mx-4 my-8 lg:my-16 md:my-12 sm:my-8 relative z-0">
          {/* Background lines - Hidden on mobile */}
          <div className="absolute inset-0 overflow-visible lg:block md:hidden sm:hidden">
            <img
              src="/Page2line(left).svg"
              alt="Left line"
              className="absolute left-[-70px] top-20 h-[300px] w-[800px] object-cover"
            />
            <img
              src="/Page2line(right).svg"
              alt="Right line"
              className="absolute right-[-70px] bottom-10 h-[300px] w-[800px] object-cover"
            />
          </div>

          <Card className="w-full h-[400px] lg:h-[660px] md:h-[500px] sm:h-[400px] bg-[#D6A0C229] rounded-[20px] lg:rounded-[30px] md:rounded-[25px] sm:rounded-[20px] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-[25px] backdrop-saturate-150">
            <CardContent className="w-full lg:w-[969px] md:w-full sm:w-full text-center px-4 lg:px-0 md:px-4 sm:px-4">
              {/* Icons */}
              <div className="icons-animation icons-fade-out">
                <div className="flex gap-4 mb-8 justify-center">
                  <div className="w-12 h-12 rounded-full bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] flex items-center justify-center">
                    <img src="/phone.svg" alt="Phone" className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[linear-gradient(90deg,rgba(152,77,149,1)_0%,rgba(211,156,192,1)_100%)] flex items-center justify-center">
                    <img src="/message.svg" alt="Message" className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content container with relative positioning */}
              <div className="relative">
                {/* First slide - "I created Potwar clinic out of a simple <br/> " */}
                <div className="quote-animation-1 quote-fade-out-1 absolute inset-0 flex items-center justify-center">
                  <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b] px-4 lg:px-0 md:px-4 sm:px-4">
                    I created Potwar clinic out of a simple <br />
                  </p>
                </div>

                {/* Second slide - "idea: that women deserve care that feels " */}
                <div className="quote-animation-2 quote-fade-out-2 absolute inset-0 flex items-center justify-center">
                  <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b] px-4 lg:px-0 md:px-4 sm:px-4">
                    idea: that{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgba(152,77,149,1)] to-[rgba(211,156,192,1)]">
                      women deserve care
                    </span>{" "}
                    that feels
                  </p>
                </div>

                {/* Third slide - "personal, safe, and never rushed." */}
                <div className="quote-animation-3 quote-fade-out-3 absolute inset-0 flex items-center justify-center">
                  <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b] px-4 lg:px-0 md:px-4 sm:px-4">
                    personal, safe, and never rushed.
                  </p>
                </div>

                {/* Stage 4: "Hi, I am Dr. Devki" as one block */}
                <div className="quote-animation-4 absolute inset-0 flex items-center justify-center">
                  <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b] px-4 lg:px-0 md:px-4 sm:px-4">
                    Hi, I am Dr. Devki
                  </p>
                </div>

                {/* Final layout - The SAME text splits into left, center, right */}
                <div className="quote-animation-5 quote-animation-6 quote-animation-7 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 md:gap-6 sm:gap-4">
                  {/* Left text - SAME text as above */}
                  <div className="text-center lg:text-left">
                    <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b]">
                      Hi, I am
                    </p>
                  </div>

                  {/* Center photo */}
                  <div>
                    <div className="w-[160px] h-[200px] lg:w-[320px] lg:h-[400px] md:w-[240px] md:h-[300px] sm:w-[160px] sm:h-[200px] bg-gray-200 rounded-[10px] lg:rounded-[20px] md:rounded-[15px] sm:rounded-[10px] overflow-hidden">
                      <img
                        src="/DrDevki.svg"
                        alt="Dr. Devki Potwar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right text - SAME text as above */}
                  <div className="text-center lg:text-left">
                    <p className="text-[20px] lg:text-[38px] md:text-[28px] sm:text-[20px] leading-[24px] lg:leading-[48px] md:leading-[36px] sm:leading-[24px] font-inter font-bold text-[#2b2b2b]">
                      Dr. Devki
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Section - Responsive */}
        <section className="px-4 lg:px-16 md:px-8 sm:px-4 py-6 lg:py-10 md:py-8 sm:py-6">
          <h2 className="w-full lg:w-[969px] md:w-full sm:w-full mx-auto text-[24px] lg:text-[42px] md:text-[32px] sm:text-[24px] xs:text-[20px] text-center leading-[28px] lg:leading-[52px] md:leading-[38px] sm:leading-[28px] xs:leading-[24px] font-inter font-bold text-[#2b2b2b] mb-6 lg:mb-12 md:mb-8 sm:mb-6 xs:mb-4 px-4 lg:px-0 md:px-4 sm:px-4">
            Our Services
          </h2>

          <div className="space-y-4 lg:space-y-8 md:space-y-6 sm:space-y-4 xs:space-y-3">
            {services.map((service, index) => {
              const [isRevealed, setIsRevealed] = useState(false);

              return (
                <div
                  key={index}
                  className="w-full h-[220px] lg:h-[328px] md:h-[260px] sm:h-[220px] xs:h-[200px] flex justify-center"
                  onMouseEnter={() => setIsRevealed(true)} // triggers reveal
                >
                  <div className="relative w-full h-[210px] lg:h-[320px] md:h-[250px] sm:h-[210px] xs:h-[190px] mx-auto flex justify-center items-center overflow-visible rounded-[20px] lg:rounded-[50px] md:rounded-[25px] sm:rounded-[20px] xs:rounded-[15px]">
                    {/* White card that slides out from behind pink */}
                    <div
                      className={`absolute w-full lg:w-[650px] md:w-[500px] sm:w-full h-[210px] lg:h-[320px] md:h-[250px] sm:h-[210px] xs:h-[190px] bg-[#F5F5F5] rounded-l-[20px] lg:rounded-l-[50px] md:rounded-l-[25px] sm:rounded-l-[20px] xs:rounded-l-[15px] px-3 lg:px-12 md:px-6 sm:px-3 xs:px-2 py-4 lg:py-10 md:py-6 sm:py-4 xs:py-3 flex items-center justify-center z-10 shadow-[0_4px_0_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out ${
                        isRevealed ? "-translate-x-[100px] lg:-translate-x-[300px] md:-translate-x-[150px] sm:-translate-x-[100px] xs:-translate-x-[80px]" : "translate-x-0"
                      }`}>
                      <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8 md:gap-4 sm:gap-3 xs:gap-2 w-full justify-center">
                        {/* Icon */}
                        <div className="w-10 h-10 lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 xs:w-8 xs:h-8 rounded-full bg-gradient-to-r from-[#984D95] to-[#D39CC0] flex items-center justify-center flex-shrink-0">
                          <img
                            src={`/Service${index + 1}.svg`}
                            alt={`Service ${index + 1}`}
                            className="w-5 h-5 lg:w-10 lg:h-10 md:w-7 md:h-7 sm:w-5 sm:h-5 xs:w-4 xs:h-4 object-contain"
                          />
                        </div>

                        {/* Description */}
                        <div className="flex-1 text-center lg:text-left max-w-full lg:max-w-[400px] md:max-w-[250px] sm:max-w-full">
                          <p className="text-[#5C5C5C] text-xs lg:text-lg md:text-sm sm:text-xs xs:text-xs leading-tight font-light whitespace-pre-line">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Pink Card */}
                    <div
                      className={`w-full lg:w-[650px] md:w-[500px] sm:w-full h-[210px] lg:h-[327px] md:h-[250px] sm:h-[210px] xs:h-[190px] bg-[#d6a0c2] rounded-[20px] lg:rounded-[50px] md:rounded-[25px] sm:rounded-[20px] xs:rounded-[15px] flex flex-col justify-center items-center text-center z-20 transition-transform duration-500 ease-out ${
                        isRevealed ? "translate-x-[100px] lg:translate-x-[300px] md:translate-x-[150px] sm:translate-x-[100px] xs:translate-x-[80px]" : "translate-x-0"
                      }`}>
                      <p className="text-white/70 text-xs lg:text-lg md:text-sm sm:text-xs xs:text-xs mb-1">
                        We are here for
                      </p>
                      <h3 className="font-inter font-bold text-white text-[14px] lg:text-5xl md:text-2xl sm:text-[14px] xs:text-[12px] leading-tight whitespace-pre-line px-2 lg:px-0 md:px-2 sm:px-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Gallery Section - Responsive */}
        <section className="pt-[20px] lg:pt-[100px] md:pt-[40px] sm:pt-[20px] xs:pt-[15px] max-[480px]:pt-[10px] px-4 lg:px-16 md:px-8 sm:px-4 pb-4 lg:pb-20 md:pb-8 sm:pb-4 xs:pb-3 max-[480px]:pb-2 flex flex-col lg:flex-row relative overflow-hidden">
          {/* Background lines - Hidden on mobile */}
          <div className="absolute inset-0 overflow-visible pointer-events-none lg:block md:hidden sm:hidden xs:hidden max-[480px]:hidden">
            <img
              src="public/Galleryline.svg"
              alt="Background line"
              className="absolute top-[70%] left-[0px] transform -translate-y-1/2 h-[270px] w-[1100px] object-cover"
            />
          </div>

          <Card className="w-full h-[250px] lg:h-[630px] md:h-[350px] sm:h-[250px] xs:h-[220px] max-[480px]:h-[200px] bg-[#D6A0C229] rounded-[16px] lg:rounded-[30px] md:rounded-[20px] sm:rounded-[16px] xs:rounded-[14px] max-[480px]:rounded-[12px] flex flex-col lg:flex-row items-center justify-start relative overflow-hidden backdrop-blur-[25px] backdrop-saturate-150 px-2 lg:px-16 md:px-4 sm:px-2 xs:px-1 max-[480px]:px-1 pt-4 lg:pt-12 md:pt-5 sm:pt-4 xs:pt-3 max-[480px]:pt-2 pb-4 lg:pb-12 md:pb-5 sm:pb-4 xs:pb-3 max-[480px]:pb-2">
            <CardContent className="p-0 w-full h-full">
              <div className="flex flex-col lg:flex-row w-full h-full gap-2 lg:gap-10 md:gap-4 sm:gap-2 xs:gap-1 max-[480px]:gap-1">
                {/* LEFT SIDE - Text content */}
                <div className="w-full lg:w-[50%] md:w-full sm:w-full max-w-full lg:max-w-[600px] md:max-w-full sm:max-w-full relative z-10 lg:ml-4 md:ml-0 sm:ml-0 flex flex-col justify-center lg:mt-[-100px] md:mt-0 sm:mt-0 text-center lg:text-left">
                  <h1 className="text-[16px] lg:text-[44px] md:text-[24px] sm:text-[16px] xs:text-[14px] max-[480px]:text-[12px] leading-[20px] lg:leading-[64px] md:leading-[30px] sm:leading-[20px] xs:leading-[18px] max-[480px]:leading-[16px] font-inter font-semibold text-[#2b2b2b] mb-1 lg:mb-4 md:mb-1 sm:mb-1 xs:mb-1 max-[480px]:mb-1">
                    Gallery
                  </h1>
                  <p className="font-inter font-light text-[#747474] text-xs lg:text-base md:text-xs sm:text-xs leading-relaxed mb-2 lg:mb-5 md:mb-2 sm:mb-2 xs:mb-2 max-[480px]:mb-1">
                    Lorem ipsum dolor sit amet <br /> consectetur. Proin erat
                    nullam <br />
                    semper faucibus
                  </p>
                  <Button className="mt-3 lg:mt-8 md:mt-3 sm:mt-3 xs:mt-3 max-[480px]:mt-2 w-fit pl-3 pr-1.5 py-2 relative overflow-hidden group rounded-[50px] transition-all duration-300 mx-auto lg:mx-0">
                    <div className="absolute inset-0 w-full bg-[#2B2B2B]" />
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-[rgba(152,77,149,1)] to-[rgba(211,156,192,1)] transition-all duration-300 ease-in-out group-hover:w-full" />
                    <span className="font-inter font-light text-[#F5F5F5] text-xs lg:text-base md:text-xs sm:text-xs group-hover:text-white transition-colors duration-300 relative z-10">
                      Book Appointment
                    </span>
                    <div className="p-2 bg-[#FFFFFF] group-hover:bg-white rounded-full transition-all duration-300 relative z-10 ml-[1px]">
                      <img
                        src="/arrow.svg"
                        alt="Frame"
                        className="w-2.5 h-2.5"
                      />
                    </div>
                  </Button>
                </div>

                {/* RIGHT SIDE - Image gallery */}
                <div className="w-full overflow-x-auto scrollbar-hide lg:ml-[-100px] md:ml-0 sm:ml-0 lg:mt-14 md:mt-2 sm:mt-2 xs:mt-1 max-[480px]:mt-1 pr-1 lg:pr-8 md:pr-2 sm:pr-1 xs:pr-1 max-[480px]:pr-0">
                  <div className="flex gap-1 lg:gap-6 md:gap-2 sm:gap-1 xs:gap-1 max-[480px]:gap-1 w-max">
                    {[1, 2, 3].map((group) => (
                      <div
                        key={group}
                        className="flex flex-col lg:flex-row gap-1 lg:gap-6 md:gap-2 sm:gap-1 xs:gap-1 max-[480px]:gap-1 min-w-[180px] lg:min-w-[640px] md:min-w-[240px] sm:min-w-[180px] xs:min-w-[150px] max-[480px]:min-w-[120px] snap-start">
                        {/* Large Image */}
                        <div className="w-[90px] h-[120px] lg:w-[330px] lg:h-[440px] md:w-[110px] md:h-[147px] sm:w-[90px] sm:h-[120px] xs:w-[75px] xs:h-[100px] max-[480px]:w-[60px] max-[480px]:h-[80px] bg-gray-300 rounded-md lg:rounded-2xl md:rounded-lg sm:rounded-md xs:rounded-sm max-[480px]:rounded-sm overflow-hidden">
                          <img
                            src="/Gallerylarge(1).svg"
                            alt="Clinic Big1"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Two stacked small images */}
                        <div className="flex flex-col gap-1 lg:gap-6 md:gap-2 sm:gap-1 xs:gap-1 max-[480px]:gap-1">
                          <div className="w-[100px] h-[58px] lg:w-[350px] lg:h-[205px] md:w-[120px] md:h-[70px] sm:w-[100px] sm:h-[58px] xs:w-[85px] xs:h-[49px] max-[480px]:w-[70px] max-[480px]:h-[41px] bg-gray-200 rounded-md lg:rounded-2xl md:rounded-lg sm:rounded-md xs:rounded-sm max-[480px]:rounded-sm overflow-hidden">
                            <img
                              src="/Gallerysmall(1).svg"
                              alt="Clinic small1"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[100px] h-[58px] lg:w-[350px] lg:h-[205px] md:w-[120px] md:h-[70px] sm:w-[100px] sm:h-[58px] xs:w-[85px] xs:h-[49px] max-[480px]:w-[70px] max-[480px]:h-[41px] bg-gray-200 rounded-md lg:rounded-2xl md:rounded-lg sm:rounded-md xs:rounded-sm max-[480px]:rounded-sm overflow-hidden">
                            <img
                              src="/Gallerysmall(2).svg"
                              alt="Clinic small2"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials Section - Responsive */}
        <section className="px-4 lg:px-16 md:px-8 sm:px-4 py-8 lg:py-16 md:py-12 sm:py-8 bg-white">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-16 md:mb-12 sm:mb-8 gap-6 lg:gap-0 md:gap-4 sm:gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-[24px] lg:text-[40px] md:text-[32px] sm:text-[24px] xs:text-[20px] font-bold text-[#000000]">
                Hear from my patients
              </h2>
              <p className="text-[#747474] text-sm lg:text-base md:text-base sm:text-sm xs:text-xs font-light leading-6 mt-4 w-full lg:w-[475px] md:w-full sm:w-full">
                Lorem ipsum dolor sit amet consectetur. Proin erat nullam semper
                faucibus et pharetra. Hendrerit.
              </p>
            </div>

            <Button className="mt-8 w-fit pl-3 pr-1.5 py-2 relative overflow-hidden group rounded-[50px] transition-all duration-300 mx-auto lg:mx-0">
              <div className="absolute inset-0 w-full bg-[#2B2B2B]" />
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-[rgba(152,77,149,1)] to-[rgba(211,156,192,1)] transition-all duration-300 ease-in-out group-hover:w-full" />
              <span className="font-inter font-light text-[#F5F5F5] text-base group-hover:text-white transition-colors duration-300 relative z-10">
                Book Appointment
              </span>
              <div className="p-2 bg-[#FFFFFF] group-hover:bg-white rounded-full transition-all duration-300 relative z-10 ml-[1px]">
                <img src="/arrow.svg" alt="Frame" className="w-2.5 h-2.5" />
              </div>
            </Button>
          </div>

          <div className="w-full px-2 lg:px-6 md:px-4 sm:px-2 max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 lg:gap-10 md:gap-6 sm:gap-3 xs:gap-2 auto-rows-auto">
              {/* 1. Liked our service (Purple) */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-md w-full lg:w-[300px] md:w-[250px] sm:w-full h-[300px] lg:h-[420px] md:h-[370px] sm:h-[300px] xs:h-[250px] lg:translate-y-5 md:translate-y-0 sm:translate-y-0 xs:translate-y-0 lg:ml-[-24px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(1).svg"
                  alt="Column 1 Row 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 2. Anil Poojari */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[320px] lg:h-[450px] md:h-[390px] sm:h-[320px] xs:h-[270px] lg:mt-[160px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-12px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(3).svg"
                  alt="Column 2 Row 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 3. Clinic ipad */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[240px] lg:h-[320px] md:h-[290px] sm:h-[240px] xs:h-[200px] lg:mt-[70px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-10px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(5).svg"
                  alt="Column 3 Row 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 4. Priyanka Lingawale */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[170px] lg:h-[210px] md:h-[200px] sm:h-[170px] xs:h-[150px] lg:mt-[-20px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-1px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(7).svg"
                  alt="Column 4 Row 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 5. Sonali Bansode */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[230px] lg:h-[300px] md:h-[270px] sm:h-[230px] xs:h-[200px] lg:mt-[-190px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-24px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(2).svg"
                  alt="Column 1 Row 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 6. 2 Girls with Ipad */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[230px] lg:h-[300px] md:h-[270px] sm:h-[230px] xs:h-[200px] lg:translate-y-0 md:translate-y-0 sm:translate-y-0 xs:translate-y-0 lg:ml-[-12px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(4).svg"
                  alt="Column 2 Row 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 7. Alok Pardeshi */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[230px] lg:h-[300px] md:h-[270px] sm:h-[230px] xs:h-[200px] lg:mt-[-235px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-10px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(6).svg"
                  alt="Column 3 Row 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 8. Anil Vazirani */}
              <div className="rounded-[20px] lg:rounded-[50px] md:rounded-[30px] sm:rounded-[20px] xs:rounded-[15px] overflow-hidden shadow-sm w-full lg:w-[300px] md:w-[250px] sm:w-full h-[390px] lg:h-[570px] md:h-[470px] sm:h-[390px] xs:h-[330px] lg:mt-[-440px] md:mt-0 sm:mt-0 xs:mt-0 lg:ml-[-1px] md:ml-0 sm:ml-0 xs:ml-0">
                <img
                  src="/Testimonial(8).svg"
                  alt="Column 4 Row 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Explore All Link */}
          <div className="mt-[50px] text-center">
            <button className="text-base text-[#000000] font-inter font-light inline-flex items-center gap-2 hover:underline">
              Explore All
              <img src="/arrow.svg" alt="Frame" className="w-3 h-3" />
            </button>
          </div>
        </section>

        {/* Clients/Backlinks/Companies Section - Responsive */}
        <section className="w-full h-[80px] lg:h-[140px] md:h-[100px] sm:h-[80px] bg-[#e8e8e8] flex items-center overflow-hidden relative px-4 lg:px-16 md:px-8 sm:px-4 mt-8 lg:mt-12 md:mt-10 sm:mt-8">
          <div className="w-full h-full flex items-center">
            <div className="flex whitespace-nowrap animate-marquee gap-8 lg:gap-16 md:gap-12 sm:gap-8">
              {/* Duplicate this group to ensure seamless loop */}
              {Array(100).fill(
                <>
                  <img
                    src="/RelianceBL1.svg"
                    alt="Client 1"
                    className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[165px] md:h-[165px] sm:w-[110px] sm:h-[110px] object-contain"
                  />
                  <img
                    src="/BCTrustBL2.svg"
                    alt="Client 2"
                    className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[165px] md:h-[165px] sm:w-[110px] sm:h-[110px] object-contain"
                  />
                  <img
                    src="/SaifeeBL3.svg"
                    alt="Client 3"
                    className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[165px] md:h-[165px] sm:w-[110px] sm:h-[110px] object-contain"
                  />
                  <img
                    src="/WorkhardBL4.svg"
                    alt="Client 4"
                    className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[165px] md:h-[165px] sm:w-[110px] sm:h-[110px] object-contain"
                  />
                  <img
                    src="/SEHBL5.svg"
                    alt="Client 5"
                    className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[165px] md:h-[165px] sm:w-[110px] sm:h-[110px] object-contain"
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Location Section - Responsive */}
        <section className="w-full h-[600px] lg:h-[840px] md:h-[700px] sm:h-[600px] bg-[#FFFFFF] mt-8 lg:mt-10 md:mt-9 sm:mt-8">
          <div className="px-4 lg:px-16 md:px-8 sm:px-4 py-8 lg:py-16 md:py-12 sm:py-8 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 md:gap-6 sm:gap-8">
            <div className="w-full lg:max-w-[475px] md:w-full sm:w-full lg:mt-[140px] md:mt-[70px] sm:mt-[35px] text-center lg:text-left">
              <h2 className="text-[28px] lg:text-[38px] md:text-[32px] sm:text-[28px] leading-[32px] lg:leading-[50px] md:leading-[40px] sm:leading-[32px] font-inter font-bold text-[#2b2b2b]">
                Potwar Clinic
              </h2>
              <p className="mt-4 font-inter font-light text-[#747474] text-sm lg:text-base md:text-base sm:text-sm leading-6">
                Address: Om Chambers, Room No. 208, Second <br /> Floor, 123,
                August Kranti Maidan, Kemps Corner, <br /> Mumbai - 400 026.
              </p>
              <button className="mt-4 text-blue-600 underline font-inter font-normal text-sm lg:text-base md:text-base sm:text-sm inline-flex items-center gap-2 hover:text-blue-700 transition-colors mx-auto lg:mx-0">
                Get Directions
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  className="w-3 h-3 filter brightness-0 saturate-100 invert-[0.4] sepia-[0.5] saturate-[2.5] hue-rotate-[200deg]"
                />
              </button>
              {/* Affiliated Hospitals Section */}
              <div className="mt-[20px] lg:mt-[30px] md:mt-[25px] sm:mt-[20px]">
                <h3 className="text-[#984D95] font-semibold text-sm lg:text-base md:text-base sm:text-sm uppercase mb-4">
                  Affiliated Hospitals
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3 md:gap-2.5 sm:gap-2 max-w-full lg:max-w-[700px] md:max-w-full sm:max-w-full justify-center lg:justify-start">
                  {/* Highlighted Hospital - Sir HN Reliance hospital */}
                  <button className="px-2 lg:px-3 md:px-2.5 sm:px-2 py-1.5 lg:py-2 md:py-1.5 sm:py-1.5 rounded-[15px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-gradient-to-r from-[#984D95] to-[#D39CC0] text-[#FFFFFF] font-extralight text-xs lg:text-sm md:text-xs sm:text-xs inline-flex items-center gap-2 lg:gap-3 md:gap-2.5 sm:gap-2 hover:shadow-lg transition-all duration-300">
                    Sir HN Reliance hospital
                    <div className="p-1.5 lg:p-2 md:p-1.5 sm:p-1.5 bg-white rounded-[25px] lg:rounded-[50px] md:rounded-[35px] sm:rounded-[25px]">
                      <img src="/arrow.svg" alt="Frame" className="w-2.5 lg:w-3 md:w-2.5 sm:w-2.5 h-2.5 lg:h-3 md:h-2.5 sm:h-2.5" />
                    </div>
                  </button>

                  {/* Other Hospitals */}
                  {[
                    "Breach Candy hospital",
                    "Saifee hospital",
                    "Babies and Us Fertility and IVF Centre",
                    "Wockhardt hospital",
                    "Saint Elizabeth Hospital",
                  ].map((hospital, index) => (
                    <button
                      key={index}
                      className="px-2 lg:px-3 md:px-2.5 sm:px-2 py-1.5 lg:py-2 md:py-1.5 sm:py-1.5 rounded-[15px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] bg-[#EEEEEE] text-[#2b2b2b] font-extralight text-xs lg:text-sm md:text-xs sm:text-xs inline-flex items-center gap-2 lg:gap-3 md:gap-2.5 sm:gap-2 hover:bg-gradient-to-r hover:from-[#984D95] hover:to-[#D39CC0] hover:text-white transition-all duration-300 group">
                      {hospital}
                      <img
                        src="/arrow.svg"
                        alt="Arrow"
                        className="w-2.5 lg:w-3 md:w-2.5 sm:w-2.5 h-2.5 lg:h-3 md:h-2.5 sm:h-2.5 group-hover:filter group-hover:invert transition-all duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Card className="w-full lg:w-[755px] md:w-full sm:w-full h-[300px] lg:h-[600px] md:h-[400px] sm:h-[300px] bg-white rounded-[20px] lg:rounded-[30px] md:rounded-[25px] sm:rounded-[20px] relative shadow-lg">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full rounded-[20px] lg:rounded-[30px] md:rounded-[25px] sm:rounded-[20px] overflow-hidden relative">
                  {/* Map Image */}
                  <img
                    src="/Map.svg"
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />

                  {/* Operating Hours Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#F5F5F5] rounded-b-[20px] lg:rounded-b-[30px] md:rounded-b-[25px] sm:rounded-b-[20px] px-3 lg:px-6 md:px-4 sm:px-3 py-5 lg:py-10 md:py-7 sm:py-5 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 md:gap-2 sm:gap-3">
                    <div className="text-center lg:text-left">
                      <div className="text-[#747474]">
                        <p className="font-inter font-light text-xs lg:text-sm md:text-xs sm:text-xs">
                          Monday to Saturday
                        </p>
                      </div>
                      <div className="text-[#1E1E1E]">
                        <p className="font-inter font-light text-xs lg:text-sm md:text-xs sm:text-xs">
                          3:00 pm - 6:00 pm
                        </p>
                      </div>
                    </div>
                    <Button className="inline-flex items-center gap-[8px] lg:gap-[11px] md:gap-[9px] sm:gap-[8px] pl-2 lg:pl-3 md:pl-2.5 sm:pl-2 pr-1 lg:pr-1.5 md:pr-1.25 sm:pr-1 py-1 lg:py-1.5 md:py-1.25 sm:py-1 bg-[#2b2b2b] rounded-[25px] lg:rounded-[50px] md:rounded-[35px] sm:rounded-[25px] hover:bg-[#3a3a3a] transition-colors">
                      <span className="font-inter font-light text-white text-xs lg:text-base md:text-sm sm:text-xs">
                        Get Directions
                      </span>
                      <div className="p-1.5 lg:p-2 md:p-1.5 sm:p-1.5 bg-white rounded-[25px] lg:rounded-[50px] md:rounded-[35px] sm:rounded-[25px]">
                        <img src="/arrow.svg" alt="Frame" className="w-2.5 lg:w-3 md:w-2.5 sm:w-2.5 h-2.5 lg:h-3 md:h-2.5 sm:h-2.5" />
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer - Responsive */}
        <footer className="w-full px-4 lg:px-16 md:px-8 sm:px-4 py-8 lg:py-16 md:py-12 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white rounded-[20px] lg:rounded-[30px] md:rounded-[25px] sm:rounded-[20px] shadow-lg overflow-hidden relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/Footer.svg"
                  alt="Footer Background"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6 lg:p-12 md:p-8 sm:p-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 md:gap-4 sm:gap-6">
                  {/* Address Section */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:mt-[100px] md:mt-[50px] sm:mt-[25px] text-center lg:text-left">
                    <div>
                      <p className="text-[#747474] font-inter font-light text-sm lg:text-base md:text-base sm:text-sm leading-6 max-w-xs">
                        Address:Om Chambers, Room No. 208, Second Floor, 123,
                        August Kranti Maidan, Kemps Corner, Mumbai - 400 026.
                      </p>
                      <Button className="mt-6 lg:mt-8 md:mt-7 sm:mt-6 w-fit pl-3 pr-1.5 py-2 relative overflow-hidden group rounded-[50px] transition-all duration-300 mx-auto lg:mx-0">
                        <div className="absolute inset-0 w-full bg-[#2B2B2B]" />
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-[rgba(152,77,149,1)] to-[rgba(211,156,192,1)] transition-all duration-300 ease-in-out group-hover:w-full" />
                        <span className="font-inter font-light text-[#F5F5F5] text-sm lg:text-base md:text-base sm:text-sm group-hover:text-white transition-colors duration-300 relative z-10">
                          Book Appointment
                        </span>
                        <div className="p-2 bg-[#FFFFFF] group-hover:bg-white rounded-full transition-all duration-300 relative z-10 ml-[1px]">
                          <img
                            src="/arrow.svg"
                            alt="Frame"
                            className="w-2.5 h-2.5"
                          />
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-full lg:w-px h-px lg:h-16 bg-gray-300 mx-0 lg:mx-8 md:mx-4 sm:mx-0"></div>

                  {/* Phone Section */}
                  <div className="flex items-center gap-4 text-center lg:text-left">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#984D95] to-[#D39CC0] flex items-center justify-center">
                      <PhoneIcon className="w-4 h-4 lg:w-5 lg:h-5 md:w-4.5 md:h-4.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <div className="space-y-1">
                        <p className="text-[#747474] font-inter font-light text-sm lg:text-base md:text-base sm:text-sm">
                          +91-9833646316
                        </p>
                        <p className="text-[#747474] font-inter font-light text-sm lg:text-base md:text-base sm:text-sm">
                          +91-9920414643
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-full lg:w-px h-px lg:h-16 bg-gray-300 mx-0 lg:mx-8 md:mx-4 sm:mx-0"></div>

                  {/* Email Section */}
                  <div className="flex items-center gap-4 text-center lg:text-left">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#984D95] to-[#D39CC0] flex items-center justify-center">
                      <MailIcon className="w-4 h-4 lg:w-5 lg:h-5 md:w-4.5 md:h-4.5 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div>
                      <div className="space-y-1">
                        <p className="text-[#747474] font-inter font-light text-sm lg:text-base md:text-base sm:text-sm">
                          devkidesai@gmail.com
                        </p>
                        <p className="text-[#747474] font-inter font-light text-sm lg:text-base md:text-base sm:text-sm">
                          potwarclinic@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Book Appointment Button */}
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 lg:mt-12 md:mt-10 sm:mt-8 pt-6 lg:pt-8 md:pt-7 sm:pt-6 border-t border-gray-200">
                  <p className="font-inter font-light text-[#2b2b2b] text-sm lg:text-base md:text-base sm:text-sm">
                    2025 by Dr. Devki Potwar powerd and secured by Regis Digital
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </footer>
      </div>
    </div>
  );
};
