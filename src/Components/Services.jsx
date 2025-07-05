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
    <div className="bg-[#EBF1FF] rounded-[24px] w-11/12 mx-auto">
      <div className="flex items-center justify-center  pt-[100px]">
        <Image src={p1} alt="profile" />
        <Image src={p2} alt="profile" className="-ml-2" />
        <Image src={p3} alt="profile" className="-ml-2" />
        <Image src={p4} alt="profile" className="-ml-2" />
        <Image src={p5} alt="profile" className="-ml-2" />
      </div>

      <h1 className="font-semibold text-[50px] leading-[58px] text-[#0A0D14] mt-6 text-center">
        Here's what we bring to the table
      </h1>

      <p className="font-inter text-center text-[#525866] leading-[26px] max-w-2xl mx-auto mt-5">
        Discover our winning combination of expertise, tailor-made strategies,
        transparency, and proven results. We're not just your average SEO
        service; we're your digital partners, serving up a recipe for online
        success.
      </p>

      {/* tab component */}
      <div className="py-16 px-6">
        <div className="">
          <div className="flex gap-6 items-start max-w-[1290px] mx-auto">
            {/* Left side - Services */}
            <div className="space-y-6 max-w-[350px]">
              {/* Service tabs */}
              <div className="space-y-[14px]">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left px-[20px] py-[16px] rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? "bg-[#375DFB] text-white shadow-lg"
                        : "bg-white text-[#0A0D14] hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-medium text-[20px]">
                      {service.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Content and Image */}
            <div className="flex items-start w-full  bg-white pt-[42px] rounded-[12px] pb-12">
              {/* Content Panel */}
              <div className="px-[42px] max-w-[528px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
                  {services[activeTab].title}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>{services[activeTab].content.description}</p>
                  <p>{services[activeTab].content.additionalInfo}</p>
                </div>
              </div>

              {/* Consultant Image */}
              <div className="w-full h-full">
                <div className="rounded-lg">
                  <Image
                    src={serviceImg}
                    alt="consultant"
                    className=" object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-[30px] py-[18px] font-semibold text-white bg-[#375DFB] rounded-[6px] mb-[120px]">
          Request a Proposal
        </button>
      </div>
    </div>
  );
};

export default Services;
