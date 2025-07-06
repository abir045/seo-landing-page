"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const FAQ = () => {
  const accordingData = [
    {
      title: "Are my deposits insured?",
      description:
        "Think of your website's organic traffic like a plant in your digital garden. It won't flourish if you're serving up content as bland as a cardboard sandwich, grappling with technical troubles, or leaving it starving for keywords and backlinks. Time to don your digital gardening gloves, dig deep, and cultivate some fruitful fixes to watch your traffic blossom.",
    },
    {
      title: "How to find suitable keywords for your business?",
      description:
        "To find suitable keywords for your business, start by understanding your target audience and what terms they might search for when looking for your products or services. Use tools like Google Keyword Planner, Ubersuggest, or SEMrush to explore search volume, competition, and related keyword ideas. Analyze competitors’ websites to identify keywords they rank for. Focus on a mix of short-tail (broad) and long-tail (specific) keywords to balance reach and relevance. Finally, choose keywords that align with your business goals and integrate them naturally into your content.",
    },
    {
      title: "How to check my website's ranking?",
      description:
        "To check your website's ranking, use SEO tools like Google Search Console, Ahrefs, SEMrush, or Ubersuggest. These platforms allow you to track your website's position for specific keywords across search engines. Simply enter your domain and target keywords to see how your pages are performing. Google Search Console also shows which queries bring traffic to your site and your average position in search results. Regularly monitoring your rankings helps you measure SEO performance and make data-driven improvements.",
    },

    {
      title: `Do I need a digital marketing agency for SEO?`,
      description:
        "Hiring a digital marketing agency for SEO can be beneficial, especially if you lack the time, tools, or expertise to handle it yourself. Agencies bring experience, strategic planning, and access to advanced SEO tools to help improve your website’s visibility and rankings. However, if you have a small business with a limited budget, you can start with basic SEO practices on your own. Ultimately, the decision depends on your goals, resources, and how quickly you want to see results.",
    },

    {
      title: "How soon should I expect results from SEO?",
      description:
        "SEO is a long-term strategy, and results typically take time. You can expect to see noticeable improvements in 3 to 6 months, depending on your website’s current status, competition, and the effectiveness of your SEO efforts. Factors like content quality, backlink building, and technical optimization all influence the timeline. While some small gains may appear early, consistent effort is key to achieving and maintaining strong rankings over time.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div>
      <h1 className="font-semibold text-[50px] text-center text-[#0A0D14] mt-32">
        Frequently asked questions
      </h1>
      <p className="font-inter text-center text-[#525866] mt-5">
        Have any question? We’re here to help.
      </p>

      {/* accordion */}

      <div className="flex gap-3 flex-col w-full mt-32 max-w-4xl mx-auto mb-18">
        {accordingData?.map((according, index) => (
          <article
            key={index}
            className="border-1 border-[#E2E4E9] dark:border-slate-700 border-border rounded py-5 px-5"
          >
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-[#0A0D14] font-medium text-[20px]">
                {according.title}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[1.2rem] dark:text-slate-600 text-text transition-all duration-300 ${
                    isAccordingOpen === index &&
                    "rotate-[180deg] !text-[#3B9DF8]"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordingOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#525866] dark:text-[#abc2d3] font-inter text-base overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* text with a button section */}

      <div className="bg-[#C2D6FF] rounded-[12px] max-w-5xl mx-auto flex items-center justify-between px-[32px] mb-32">
        <div>
          <p className="font-medium text-2xl text-[#0A0D14] mt-[30px]">
            Still have questions?
          </p>
          <p className="font-inter text-base text-[#0A0D14] mt-3 mb-[30px]">
            Can't seem to find the answer? Get in direct contact with our team.
          </p>
        </div>

        <button className="bg-[#375DFB] px-[30px] py-[18px] rounded-[6px] text-white font-semibold">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default FAQ;
