"use client";
import { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { TbLogout2, TbUsersGroup } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import {
  MdLaptopMac,
  MdOutlineArrowRightAlt,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../public/images/Logo.png";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isProductHover, setIsProductHover] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false);
  const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState("");

  return (
    <nav className="flex items-center justify-between w-full relative max-w-[1290px] mx-auto my-5 px-4 lg:px-0">
      {/* logo */}
      <div className="flex items-center gap-6 lg:gap-12">
        {/* Logo placeholder */}
        <div className="">
          <Image src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
          {/* product megamenu */}
          <li
            className={`${
              isProductHover
                ? "text-[#3B9DF8]"
                : "dark:text-[#abc2d3] text-gray-600"
            } flex items-center gap-[5px] cursor-pointer relative group transition-all duration-300 hover:text-[#3B9DF8]`}
            onMouseEnter={() => setIsProductHover(true)}
            onMouseLeave={() => setIsProductHover(false)}
          >
            Our Services
            <IoIosArrowUp
              className={`${
                isProductHover ? "rotate-0" : "rotate-[-180deg]"
              } transition-all duration-300`}
            />
            {/* mega menu */}
            <div
              className={`${
                isProductHover
                  ? "translate-y-0 opacity-100 z-30 visible"
                  : "translate-y-[20px] opacity-0 z-[-1] invisible"
              } bg-white rounded-lg w-[400px] absolute top-[40px] dark:bg-slate-800 left-0  transition-all duration-300 shadow-2xl border border-gray-100`}
            >
              <div className="grid grid-cols-1 gap-4 bg-[#EFEFEF] p-[10px]">
                <div className="flex flex-col gap-[20px]">
                  <ul className="">
                    <li className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                      <div>
                        <h4 className="font-medium text-sm">
                          On-page SEO and Technical Audit
                        </h4>
                      </div>
                    </li>
                    <li className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                      <div>
                        <h4 className="font-medium text-sm">
                          Tailored local seo
                        </h4>
                      </div>
                    </li>
                    <li className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                      <div>
                        <h4 className="font-medium text-sm">
                          Expert technical seo suggestions
                        </h4>
                      </div>
                    </li>
                    <li className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                      <div>
                        <h4 className="font-medium text-sm">
                          High-quality backlink building
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <a href="#work">
            <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer transition-all duration-300 relative">
              Our Work
              {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B9DF8] transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          </a>

          <a href="#about">
            <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer transition-all duration-300 relative">
              About Us
              {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B9DF8] transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          </a>

          <a href="#contact">
            <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer transition-all duration-300 relative">
              Careers
              {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B9DF8] transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          </a>

          <a href="#blog">
            <li className="flex items-center dark:text-[#abc2d3] hover:text-[#3B9DF8] group gap-[5px] cursor-pointer transition-all duration-300 relative">
              Blog
              {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B9DF8] transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          </a>
        </ul>
      </div>

      {/* Right side - Contact button and mobile menu */}
      <div className="flex items-center gap-[15px]">
        <button className="px-4 lg:px-[28px] py-3 lg:py-[17px] bg-[#375DFB] text-white font-medium rounded-[6px] hover:bg-[#2a4bc7] transition-colors duration-300 text-sm lg:text-base">
          Contact Us
        </button>

        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] dark:text-[#abc2d3] text-[#424242] cursor-pointer lg:hidden flex hover:text-[#3B9DF8] transition-colors"
        />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* mobile sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[100%] opacity-0 z-[-1]"
        } lg:hidden bg-white p-6 fixed dark:bg-slate-700 top-0 right-0 h-full w-[300px] sm:w-[350px] transition-all duration-300 shadow-2xl overflow-y-auto`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between mb-8">
          <Image alt="logo" src={logo} />
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <CiMenuFries className="text-xl" />
          </button>
        </div>

        <ul className="items-start gap-[5px] text-[1rem] text-gray-600 flex flex-col">
          <li
            onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
            className="hover:text-[#3B9DF8] group dark:text-[#abc2d3] transition-all duration-300 cursor-pointer capitalize flex items-center gap-[10px] p-3 rounded-lg hover:bg-blue-50 w-full"
          >
            Our Services
            <IoIosArrowDown
              className={`${
                isMegaMenuCollapse ? "rotate-180" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300`}
            />
          </li>

          {/* Mobile Services Submenu */}
          <div
            className={`${
              isMegaMenuCollapse
                ? "max-h-0 opacity-0"
                : "max-h-[500px] opacity-100"
            } overflow-hidden transition-all duration-300 w-full bg-[#EFEFEF] p-1`}
          >
            <div className="ml-2 space-y-2">
              <div className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                <div>
                  <h4 className="font-medium text-sm">
                    On-page SEO and Technical Audit
                  </h4>
                </div>
              </div>
              <div className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                <div>
                  <h4 className="font-medium text-sm">Tailored local seo</h4>
                </div>
              </div>
              <div className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                <div>
                  <h4 className="font-medium text-sm">
                    Expert technical seo suggestions
                  </h4>
                </div>
              </div>
              <div className="flex items-center text-[#0A0D14] hover:text-[#375DFB] group gap-[10px] cursor-pointer p-3 rounded-lg hover:bg-[#FFFFFF] transition-all duration-300">
                <div>
                  <h4 className="font-medium text-sm">
                    High-quality backlink building
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <a href="#work">
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300 cursor-pointer capitalize p-3 rounded-lg hover:bg-blue-50 w-full">
              Our Work
            </li>
          </a>

          <a href="#about">
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300 cursor-pointer capitalize p-3 rounded-lg hover:bg-blue-50 w-full">
              About Us
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300 cursor-pointer capitalize p-3 rounded-lg hover:bg-blue-50 w-full">
              Careers
            </li>
          </a>

          <a href="#blog">
            <li className="hover:text-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300 cursor-pointer capitalize p-3 rounded-lg hover:bg-blue-50 w-full">
              Blog
            </li>
          </a>
        </ul>

        {/* Mobile Contact Button */}
        <div className="mt-2 pt-6 border-t border-gray-200">
          <button className="w-full px-6 py-3 bg-[#375DFB] text-white font-medium rounded-lg hover:bg-[#2a4bc7] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
