"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import av1 from "../../public/images/avatar1.png";
import av2 from "../../public/images/avatar2.jpg";
import av3 from "../../public/images/avatar3.jpg";
import Image from "next/image";
import left from "../../public/images/leftBtn.png";
import right from "../../public/images/rightBtn.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "CEO, Ranksite Techs",
      image: av1,
      text: "Notionhive offers affordable SEO packages to boost your website's organic visibility, traffic, and rankings. Our proven approach includes strategic planning",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Davis",
      position: "Marketing Director, TechFlow",
      image: av2,
      text: "The team's expertise in SEO has transformed our online presence. We've seen a 300% increase in organic traffic within just 6 months of working with them.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      position: "Founder, StartupHub",
      image: av3,
      text: "Professional, reliable, and results-driven. Their SEO strategies are backed by data and deliver measurable outcomes. Highly recommended!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="pb-16">
      <div className="max-w-[1290px] mx-auto px-4">
        <h1 className="font-semibold text-[50px] text-center text-[#0A0D14] mt-32">
          Hear From Our Clients
        </h1>
        <p className="font-inter text-center text-[#525866] mt-5 max-w-4xl mx-auto">
          In our SEO journey, we have a roadmap filled with proven strategies,
          witty tactics, and a touch of digital magic. Explore the steps that
          take your website from the shadows to the spotlight.
        </p>

        {/* Swiper Container */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-[12px] p-8 shadow-sm border-1 border-[#E2E4E9] relative max-w-4xl mx-auto">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        loading="lazy"
                        className="w-[386px] h-[396px] rounded-[12px] object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      {/* Rating Stars */}
                      <div className="flex mb-8">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-[#0A0D14] text-[32px] font-medium leading-[38px] mb-10 ">
                        "{testimonial.text}"
                      </p>

                      {/* Name and Position */}
                      <div>
                        <h3 className="font-medium text-[#0A0D14] text-2xl mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#525866] text-base font-inter">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons - Positioned on the card */}
                  <div className="absolute right-6 bottom-6 flex space-x-3">
                    <button className="custom-button-prev w-12 h-12 rounded-full bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center border border-gray-300">
                      <Image src={left} alt="left nav" />
                    </button>

                    <button className="custom-button-next w-12 h-12 rounded-full bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center border border-gray-300">
                      <Image src={right} alt="right nav" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-between mt-20 max-w-3xl mx-auto">
          <div>
            <p className="font-semibold text-[56px] leading-[58px] text-[#0A0D14]">
              560+
            </p>
            <p className="font-inter text-[#525866] text-lg">
              Satisfied Customers
            </p>
          </div>
          {/* 2nd */}
          <div>
            <p className="font-semibold text-[56px] leading-[58px] text-[#0A0D14]">
              256+
            </p>
            <p className="font-inter text-[#525866] text-lg">5 star reviews</p>
          </div>
          {/* 3rd */}
          <div>
            <p className="font-semibold text-[56px] leading-[58px] text-[#0A0D14]">
              100 %
            </p>
            <p className="font-inter text-[#525866] text-lg">
              Recommendation Rate
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper {
          width: 100%;
          padding: 0 20px;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }

        .testimonials-swiper .swiper-slide > div {
          width: 100%;
          height: 100%;
        }

        /* Hide default navigation buttons */
        .testimonials-swiper .swiper-button-next:after,
        .testimonials-swiper .swiper-button-prev:after {
          display: none;
        }

        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          display: none;
        }

        .custom-button-next,
        .custom-button-prev {
          position: static;
          margin-top: 0;
          width: 48px;
          height: 48px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .testimonials-swiper .swiper-slide .flex {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .testimonials-swiper .swiper-slide img {
            margin: 0 auto;
            width: 80px;
            height: 80px;
          }

          .testimonials-swiper .swiper-slide .absolute {
            position: relative;
            right: auto;
            top: auto;
            bottom: auto;
            justify-content: center;
            margin-top: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
