import Image from "next/image";
import b1 from "../../public/images/blog1.png";
import b2 from "../../public/images/blog2.jpg";
import b3 from "../../public/images/blog3.jpg";

// Use 3-column layout (desktop), 1 column (mobile)
// Card hover effect: lift or underline title
// Ensure images are web-optimized

const Blog = () => {
  return (
    <div id="blog" className="max-w-[1290px] mx-auto ">
      <h1 className="font-semibold text-[58px] leading-[58px] text-center text-[#0A0D14] mt-32">
        Latest News from Blog
      </h1>

      <p className="font-inter text-center text-[#525866] mt-5 w-1/2 mx-auto">
        In our SEO journey, we have a roadmap filled with proven strategies,
        witty tactics, and a touch of digital magic. Explore the steps that take
        your website from the shadows to the spotlight.
      </p>

      {/* blog cards
       */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6 mb-32 px-4">
        {/* 1st */}
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
          <Image
            src={b1}
            className="w-[414px] h-[276px] rounded-[12px] object-cover"
            alt="blog"
          />
          <h4 className="font-semibold text-2xl text-[#0A0D14] mt-6 hover:underline transition-all duration-300">
            10 Essential SEO Strategies Every Website Owner Should Know
          </h4>

          <p className="font-inter text-base text-[#525866] mt-3">
            This is another way of saying, "We've been in business for a long
            time because people love our products and trust us with the best
            works.
          </p>
        </div>
        {/* 2nd  */}
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
          <Image
            src={b2}
            className="w-[414px] h-[276px] rounded-[12px] object-cover"
            alt="blog"
          />
          <h4 className="font-semibold text-2xl text-[#0A0D14] mt-6 hover:underline transition-all duration-300">
            Unlocking the Power of Long-Tail Keywords for SEO Success
          </h4>

          <p className="font-inter text-base text-[#525866] mt-3">
            This is another way of saying, "We've been in business for a long
            time because people love our products and trust us with the best
            works.
          </p>
        </div>
        {/* 3rd */}
        <div className="hover:transform hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
          <Image
            src={b3}
            className="w-[414px] h-[276px] rounded-[12px] object-cover"
            alt="blog"
          />
          <h4 className="font-semibold text-2xl text-[#0A0D14] mt-6 hover:underline transition-all duration-300">
            Mastering Off-Page SEO: The Art of Building Quality Backlinks
          </h4>

          <p className="font-inter text-base text-[#525866] mt-3">
            This is another way of saying, "We've been in business for a long
            time because people love our products and trust us with the best
            works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
