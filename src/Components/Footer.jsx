import React from "react";

// react icons
import tw1 from "../../public/images/tw1.png";
import fb from "../../public/images/fb.png";
import git from "../../public/images/git.png";
import linkedin from "../../public/images/link.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#161922] text-white w-full p-6 sm:p-9 overflow-hidden">
      <div className="flex justify-between gap-[30px] flex-col lg:flex-row max-w-[1290px] mx-auto mt-[128px]">
        <div>
          <h3 className="text-[20px] font-semibold text-white mb-[28px]">
            Company
          </h3>
          <div className="flex flex-col gap-[10px]">
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Pricing
            </p>
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Careers
            </p>
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Contact Us
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold text-[white] mb-[28px]">
            Services
          </h3>
          <div className="flex flex-col gap-[14px]">
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Custom web development
            </p>
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              User experience design
            </p>
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              SEO services
            </p>
            <p className="text-base text-[#E2E4E9] font-inter hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Marketing services
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold text-white mb-[28px]">
            Resources
          </h3>
          <div className="flex text-[#E2E4E9] text-base font-inter flex-col gap-[14px]">
            <p className="hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Company Deck
            </p>
            <p className="hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Development Tutorial
            </p>
            <p className="hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Write for us
            </p>
            <p className="hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
              Download our book
            </p>
          </div>
        </div>

        <div className="max-w-sm w-full">
          <h3 className="text-[20px] text-white font-semibold mb-[28px]">
            Subscribe to our newsletter
          </h3>
          <div className="flex items-center w-full  mx-auto lg:mx-0">
            <input
              type="email"
              className="py-3 px-4 bg-white text-[#0E1520] text-base font-inter flex-1 rounded-l-[8px] outline-none min-w-0"
              placeholder="Enter your email address"
            />
            <button className="text-white bg-[#375DFB] px-4 sm:px-6 py-4 rounded-r-[8px] font-inter font-semibold whitespace-nowrap text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-between mt-20">
        <div>
          <p className="font-inter text-[#E2E4E9]">
            © 2024 Notionhive. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-[28px] ">
          <Image src={tw1} alt="logo" />
          <Image src={fb} alt="logo" />
          <Image src={git} alt="logo" />
          <Image src={linkedin} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
