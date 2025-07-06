"use client";
import Image from "next/image";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import p1 from "../../public/images/p1.png";
import p2 from "../../public/images/p2.png";
import p3 from "../../public/images/p3.png";
import p4 from "../../public/images/p4.png";
import p5 from "../../public/images/p5.png";
import serviceImg from "../../public/images/service-img.png";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const services = [
    {
      title: "Tailored local seo",
      content: {
        description:
          "Irrespective of your industry - whether you're in retail, hospitality, healthcare, or any other field - our tailor-made strategies are crafted to make your business not just blend in but stand out prominently. We specialize in ensuring your business captures the spotlight and attracts clients from your precisely targeted locality.",
        additionalInfo:
          "Our extensive experience and proven tactics are your secret weapons in the quest for online prominence. Before your website rises to the zenith of search engine results pages, basking in the digital limelight. Our expertise is like a map, guiding your business through the intricate terrain of the online world, ultimately leading you to the treasure trove of increased visibility and client engagement. Your digital success is not just a possibility - it's a promise with us.",
      },
    },
    {
      title: "On-page seo and technical audit",
      content: {
        description:
          "Comprehensive analysis of your website's structure, content, and technical elements to ensure optimal search engine performance. We identify and fix issues that may be hindering your site's visibility.",
        additionalInfo:
          "Our detailed audit covers meta tags, header structure, page speed optimization, mobile responsiveness, and internal linking strategies. We provide actionable recommendations to boost your search rankings.",
      },
    },
    {
      title: "Expert technical seo suggestions",
      content: {
        description:
          "Advanced technical optimization strategies to enhance your website's crawlability, indexability, and overall search engine performance. We focus on the backend elements that search engines love.",
        additionalInfo:
          "From schema markup implementation to XML sitemap optimization, we ensure your website speaks the language that search engines understand, leading to improved rankings and visibility.",
      },
    },
    {
      title: "High-quality backlink building",
      content: {
        description:
          "Strategic link building campaigns that earn your website authoritative backlinks from reputable sources in your industry. Quality over quantity is our motto.",
        additionalInfo:
          "We focus on building relationships with relevant websites and creating valuable content that naturally attracts high-quality backlinks, boosting your domain authority and search rankings.",
      },
    },
  ];

  return (
    <div className="bg-[#EBF1FF] rounded-[12px] lg:rounded-[24px] w-full px-4 sm:px-6 lg:w-11/12 mx-auto">
      {/* Profile Images */}
      <div className="flex items-center justify-center pt-[50px] sm:pt-[70px] lg:pt-[100px]">
        <div className="flex items-center">
          <Image
            src={p1}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto rounded-full"
          />
          <Image
            src={p2}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto rounded-full -ml-2"
          />
          <Image
            src={p3}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto rounded-full -ml-2"
          />
          <Image
            src={p4}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto rounded-full -ml-2"
          />
          <Image
            src={p5}
            alt="profile"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-auto lg:h-auto rounded-full -ml-2"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[50px] leading-[32px] sm:leading-[42px] lg:leading-[58px] text-[#0A0D14] mt-4 sm:mt-6 text-center px-4">
        Here's what we bring to the table
      </h1>

      {/* Description */}
      <p className="font-inter text-center text-[#525866] text-sm sm:text-base leading-[22px] sm:leading-[26px] max-w-xl lg:max-w-2xl mx-auto mt-4 lg:mt-5 px-4">
        Discover our winning combination of expertise, tailor-made strategies,
        transparency, and proven results. We're not just your average SEO
        service; we're your digital partners, serving up a recipe for online
        success.
      </p>

      {/* Tab Component */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-start">
            {/* Left side - Services */}
            <div className="w-full lg:max-w-[350px] space-y-4 lg:space-y-6">
              {/* Service tabs */}
              <div className="space-y-3 lg:space-y-[14px]">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-4 sm:px-[20px] py-3 sm:py-[16px] rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? "bg-[#375DFB] text-white shadow-lg"
                        : "bg-white text-[#0A0D14] hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium text-base sm:text-lg lg:text-[20px]">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Content and Image */}
            <div className="flex flex-col lg:flex-row items-start w-full bg-white lg:pt-[42px] rounded-[12px] lg:pb-12">
              {/* Content Panel */}
              <div className="px-4 sm:px-6 lg:px-[42px] py-6 sm:py-8 lg:py-0 w-full lg:max-w-[528px]">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 capitalize">
                  {services[activeTab].title}
                </h2>
                <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>{services[activeTab].content.description}</p>
                  <p>{services[activeTab].content.additionalInfo}</p>
                </div>
              </div>

              {/* Consultant Image */}
              <div className="w-full h-full lg:flex-1">
                <div className="rounded-lg">
                  <Image
                    src={serviceImg}
                    alt="consultant"
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center pb-16 sm:pb-20 lg:pb-[120px]">
        <button className="px-6 sm:px-8 lg:px-[30px] py-3 sm:py-4 lg:py-[18px] font-semibold text-white bg-[#375DFB] rounded-[6px] text-sm sm:text-base">
          Request a Proposal
        </button>
      </div>
    </div>
  );
};

export default Services;
