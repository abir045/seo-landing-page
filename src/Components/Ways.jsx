import React from "react";

const Ways = () => {
  return (
    <div
      id="about"
      className="bg-[#EBF1FF] w-11/12 mx-auto rounded-[24px] mb-32"
    >
      <h1 className="font-semibold text-[50px] text-center text-[#0A0D14] pt-[100px]">
        The Way We Do It !
      </h1>
      <p className="font-inter text-[#525866] text-center mt-5 w-4/6 mx-auto">
        In our SEO journey, we have a roadmap filled with proven strategies,
        witty tactics, and a touch of digital magic. Explore the steps that take
        your website from the shadows to the spotlight.
      </p>

      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-28 px-4 md:px-12 mt-16 pb-32 gap-6 max-w-[1290px] mx-auto">
        {/* 1st card */}
        <div className="bg-[#FFFFFF] rounded-[12px] flex items-baseline gap-4 pb-[58px] px-6 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="w-[42px] h-[42px] bg-[#FDE9C7] rounded-full flex items-center justify-center text-[#20232D] font-medium text-2xl px-[15px] py-[14px]">
            1
          </div>
          <div>
            <h3 className="font-medium text-[28px] text-[#0A0D14] mt-[34px]">
              Seo spy games
            </h3>
            <p className="text-[#525866] font-inter mt-3">
              We put on our digital detective hats to spy on your competitors
              and uncover the keywords that work.
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="bg-[#FFFFFF] rounded-[12px] flex items-baseline gap-4 pb-[58px] px-6 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="w-[42px] h-[42px] bg-[#E0F8DE] rounded-full flex items-center justify-center text-[#20232D] font-medium text-2xl px-[15px] py-[14px]">
            3
          </div>
          <div>
            <h3 className="font-medium text-[28px] text-[#0A0D14] mt-[34px]">
              On-page opera
            </h3>
            <p className="text-[#525866] font-inter mt-3">
              Now, it's time to fine-tune every page of your website like a
              maestro composing a symphony. Every keyword needs to be in perfect
              harmony.
            </p>
          </div>
        </div>

        {/* 3rd card */}
        <div className="bg-[#FFFFFF] rounded-[12px] flex items-baseline gap-4 pb-[58px] px-6 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="w-[42px] h-[42px] bg-[#E1DDFF] rounded-full flex items-center justify-center text-[#20232D] font-medium text-2xl px-[15px] py-[14px]">
            2
          </div>
          <div>
            <h3 className="font-medium text-[28px] text-[#0A0D14] mt-[34px]">
              Crafting the seo drink
            </h3>
            <p className="text-[#525866] font-inter mt-3">
              We mix the perfect keywords, sizzling content, and a dash of
              technical wizardry to create the perfect seo drink that'll send
              your website up the ranks.
            </p>
          </div>
        </div>

        {/* 4th card */}
        <div className="bg-[#FFFFFF] rounded-[12px] flex items-baseline gap-4 pb-[58px] px-6 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="w-[42px] h-[42px] bg-[#FFDAC2] rounded-full flex items-center justify-center text-[#20232D] font-medium text-2xl px-[15px] py-[14px]">
            4
          </div>
          <div>
            <h3 className="font-medium text-[28px] text-[#0A0D14] mt-[34px]">
              The seo catapult
            </h3>
            <p className="text-[#525866] font-inter mt-3">
              Finally, we launch your website into SEO stardom. It's like
              sending a rocket into the digital stratosphere where online
              success awaits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ways;
