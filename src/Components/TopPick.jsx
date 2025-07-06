import Image from "next/image";
import search from "../../public/images/search.png";
import scissor from "../../public/images/scissor.png";
import seo from "../../public/images/seo.png";
import analyze from "../../public/images/analyze.png";
import graph from "../../public/images/graph.png";
import expert from "../../public/images/expert.png";
const TopPick = () => {
  return (
    <div className="max-w-[1290px] mx-auto px-4 sm:px-6">
      <h1 className="text-center font-semibold text-[32px] sm:text-[40px] lg:text-[50px] text-[#0A0D14] leading-[38px] sm:leading-[48px] lg:leading-[58px] mt-[60px] sm:mt-[80px] lg:mt-[100px]">
        Why We're the Top Pick
      </h1>
      <p className="text-center font-inter text-[#525866] mt-5 w-full sm:w-3/4 lg:w-1/2 mx-auto text-sm sm:text-base">
        Ever wondered what makes us stand out? We're not just another player in
        the game; we're the game-changers. Dive into the mechanics of our
        top-ranking status, where expertise, tailor-made solutions,
        transparency, and a track record of success blend into a digital
        symphony!
      </p>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 lg:mt-16 mb-10">
        {/* Left side - Empowering digital success */}
        <div className="bg-[#FEF7EC] rounded-[16px] w-full">
          <h3 className="font-medium text-[20px] sm:text-[24px] lg:text-[28px] text-[#0A0D14] mt-6 sm:mt-8 w-full p-4 sm:p-5">
            Empowering your digital success
          </h3>
          <p className="font-inter text-sm sm:text-base text-[#525866] px-4 sm:px-5 w-full">
            Notionhive offers affordable SEO packages to boost your website's
            organic visibility, traffic, and rankings. Our proven approach
            includes strategic planning, efficient keyword research,
            transparency, & white hat SEO techniques.
          </p>

          {/* Cards */}
          <div className="space-y-3 mt-6 sm:mt-8 lg:mt-[42px] mb-4 sm:mb-6 mx-4 sm:mx-[20px]">
            {/* 1st card */}
            <div className="bg-[#FFFCF9] rounded-[10px] border-2 border-white flex items-center justify-between p-2 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={search}
                  alt="search"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <div>
                  <p className="font-semibold text-[#392D50] text-sm sm:text-base">
                    Understanding of SEO
                  </p>
                  <p className="text-[12px] sm:text-[14px] font-inter text-[#615874]">
                    Keywords, meta tags optimization
                  </p>
                </div>
              </div>
              <button className="bg-[#CBF5E599] opacity-60 text-[#38C793] font-inter font-medium text-[12px] sm:text-[15px] p-2 sm:p-[10px] rounded-[8px] whitespace-nowrap">
                Selected
              </button>
            </div>

            {/* 2nd card */}
            <div className="bg-[#FFFCF9] rounded-[10px] border-2 border-white flex items-center justify-between p-2 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={scissor}
                  alt="scissor"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <div>
                  <p className="font-semibold text-[#392D50] text-sm sm:text-base">
                    Crafting tailored content
                  </p>
                  <p className="font-inter text-[#615874] text-[12px] sm:text-sm">
                    Tailored to your audiences intent
                  </p>
                </div>
              </div>
              <button className="bg-[#FCF1E1] text-[#F2AE40] font-inter font-medium text-[12px] sm:text-[15px] p-2 sm:p-[10px] rounded-[8px] whitespace-nowrap">
                Selected
              </button>
            </div>

            {/* 3rd card */}
            <div className="bg-[#FFFCF9] rounded-[10px] border-2 border-white flex items-center justify-between p-2 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image src={seo} alt="seo" className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <p className="font-semibold text-[#392D50] text-sm sm:text-base">
                    Utilizing SEO strategies
                  </p>
                  <p className="font-inter text-[#615874] text-[12px] sm:text-sm">
                    Such as social media engagement
                  </p>
                </div>
              </div>
              <button className="bg-[#CBF5E599] opacity-60 text-[#38C793] font-inter font-medium text-[12px] sm:text-[15px] p-2 sm:p-[10px] rounded-[8px] whitespace-nowrap">
                Selected
              </button>
            </div>

            {/* 4th card */}
            <div className="bg-[#FFFCF9] rounded-[10px] border-2 border-white flex items-center justify-between p-2 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={analyze}
                  alt="analyze"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <div>
                  <p className="font-semibold text-[#392D50] text-sm sm:text-base">
                    Analyzing SEO metrics
                  </p>
                  <p className="font-inter text-[#615874] text-[12px] sm:text-sm">
                    To identify areas for improvement
                  </p>
                </div>
              </div>
              <button className="bg-[#FCF1E1] text-[#F2AE40] font-inter font-medium text-[12px] sm:text-[15px] p-2 sm:p-[10px] rounded-[8px] whitespace-nowrap">
                Selected
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Stacked cards */}
        <div className="space-y-6 col-span-2">
          {/* First comprehensive card */}
          <div className="bg-[#EFFAF6] rounded-[16px] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Content */}
              <div className="px-4 sm:px-6 lg:px-[28px] py-6 sm:py-8 lg:py-0 lg:mt-[52px] flex-1">
                <h3 className="font-medium text-[20px] sm:text-[24px] lg:text-[28px] text-[#0A0D14] w-full">
                  Comprehensive organic seo services
                </h3>
                <p className="font-inter text-[#525866] mt-3 sm:mt-5 text-sm sm:text-base">
                  Attract customers in your specific area with our comprehensive
                  local SEO services. We'll consult, implement, and optimize
                  your website to help you climb the search engine ladder
                  organically. We will do organic branding for your company.
                </p>
              </div>
              {/* Image */}
              <div className="w-full sm:w-auto sm:flex-1">
                <Image
                  alt="chart"
                  src={graph}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second comprehensive card */}
          <div className="bg-[#EEEBFF] rounded-[16px] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center">
              {/* Content */}
              <div className="px-4 sm:px-6 lg:px-[28px] py-6 sm:py-8 lg:py-0 lg:mt-[52px] flex-1">
                <h3 className="font-medium text-[20px] sm:text-[24px] lg:text-[28px] text-[#0A0D14]">
                  Expert organic seo consultant
                </h3>
                <p className="font-inter text-[#525866] mt-3 sm:mt-5 text-sm sm:text-base">
                  Our dedicated team of consultants will create customized
                  strategies that will help you stand out from the crowd. Our
                  experts will work closely to understand your needs, develop
                  effective strategies, and offer support.
                </p>
              </div>
              {/* Image */}
              <div className="w-full h-full sm:w-auto sm:flex-1">
                <Image
                  alt="chart"
                  src={expert}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPick;
