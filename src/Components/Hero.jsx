"use client";
import Image from "next/image";
import tick from "../../public/images/tick.png";
import bg from "../../public/images/hero-bg.png";
import tw from "../../public/images/twitter.png";
import google from "../../public/images/google.png";
import up from "../../public/images/up.png";
import smile from "../../public/images/smiley.png";
import holi from "../../public/images/holiday.png";
// import voi from "../../public/images/voi.png";
import printify from "../../public/images/printify.png";
import veeps from "../../public/images/veeps.png";
import martine from "../../public/images/martine.png";
import love from "../../public/images/love-holiday.png";
import voi from "../../public/images/voi.svg";
import la from "../../public/images/la-martina.webp";

const Hero = () => {
  return (
    <div className="max-w-[1290px] mx-auto mt-[100px] md:px-5 px-5">
      {/* <div className="flex flex-col lg:flex-row  items-start justify-between mb-[68px]"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* left */}
        <div>
          <h1 className="font-semibold text-[55px] mb-6 leading-[58px]">
            Our SEO services <br /> are Your key to great <br />
            <span className="text-[#6D86EC]">online success</span>{" "}
          </h1>
          <p className="font-inter text-[#525866] mb-[30px] leading-[26px] md:w-1/2">
            Meet the Organic SEO Agency – your guides through the digital
            wilderness. We're all about sustainable growth, not quick fixes. We
            are here to demystify the journey through the digital landscape.
            Join us for an adventure in organic growth!
          </p>
          <div className="flex items-center gap-4 mb-[20px]">
            <button className="px-[28px] py-[17px] bg-[#375DFB] rounded-[6px] text-base font-semibold text-white">
              Get Started
            </button>

            <button className="px-[28px] py-[17px] border rounded-[6px] text-base font-semibold text-[#0A0D14]">
              Learn More
            </button>
          </div>
          {/*trials  */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Image
                className="hover:scale-110 transition-transform duration-300"
                alt="tick"
                src={tick}
              />
              <span className="font-inter text-base text-[#525866]">
                1 month free trial
              </span>
            </div>
            <div className="flex items-center">
              <Image
                className="hover:scale-110 transition-transform duration-300"
                alt="tick"
                src={tick}
              />
              <span className="font-inter text-base text-[#525866]">
                24/7 customer service
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="lg:w-full relative md:px-10 md:mt-20 mt-14 lg:mt-0 lg:px-0 w-11/12 mx-auto ">
          <Image alt="background" src={bg} className="w-[633px] h-[447px]" />

          {/* <div className="lg:-mt-[95%] -mt-[135%] md:-mt-[85%] ml-[26%]">
            <Image alt="twiiter" src={tw} />
          </div> */}
          <div className="absolute -top-[7%] left-[25%]">
            <Image
              alt="twiiter"
              src={tw}
              className="hover:scale-110 hover:rotate-12 transition-transform duration-300"
            />
          </div>

          {/* <div className="mt-[40%] -ml-[15%]">
            <Image src={google} alt="google" />
          </div> */}

          <div className="absolute bottom-[10%] lg:-left-[15%] md:-left-[8%] -left-[22%]">
            <Image
              src={google}
              alt="google"
              className="hover:scale-110 hover:rotate-12 transition-transform duration-300"
            />
          </div>

          <div className="flex p-2 items-center gap-[10px] bg-white rounded-[80px] absolute md:bottom-[15%] bottom-[5%] left-[40%] hover:scale-105 transition-transform duration-300 animate-fadeInUp">
            <Image
              src={smile}
              alt="up"
              className="hover:rotate-12 transition-transform duration-300"
            />
            <div>
              <p className="font-semibold font-inter text-[#392D50]">
                Great Client Experience{" "}
              </p>
              <p className="text-[12px] text-[#615874] font-inter">
                Get satisfied customer experience.
              </p>
            </div>
          </div>

          <div className="flex p-2 items-center gap-[10px] bg-white rounded-[80px] absolute md:bottom-[30%] bottom-[30%] left-[40%] hover:scale-105 transition-transform duration-300 animate-fadeInUp">
            <Image
              src={up}
              alt="up"
              className="hover:translate-y-[-4px] transition-transform duration-300"
            />
            <div>
              <p className="text-[#392D50] font-inter font-semibold">
                120% more engagement{" "}
              </p>
              <p className="font-inter text-[#615874] text-[12px]">
                Get 100x engagement than before.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col lg:flex-row items-center gap-4 space-y-2 justify-between mb-[100px] mt-8">
        <p className="font-medium font-inter uppercase text-[#1B1A1A]">
          WE HAVE 500+ Customers worldwide{" "}
        </p>

        {/* logos */}
        <div className="flex flex-col md:flex-row items-center md:gap-14">
          <Image
            src={love}
            alt="logo"
            className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out w-26 hover:scale-110"
          />
          <Image
            src={voi}
            alt="logo"
            className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-110"
          />
          <Image
            src={printify}
            alt="logo"
            className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out w-26 hover:scale-110"
          />
          <Image
            src={veeps}
            alt="logo"
            className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out w-22 hover:scale-110"
          />
          <Image
            src={la}
            alt="logo"
            className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out w-48 hover:scale-110"
          />
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style> */}
    </div>
  );
};

export default Hero;
