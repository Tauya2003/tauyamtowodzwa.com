import { RxArrowTopRight, RxDesktop } from "react-icons/rx";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

const data = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. lo",
  },
  {
    icon: <RxDesktop />,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit.  elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit.  elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[340px]"
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="border-transparent border-[1px] shadow-xl backdrop-blur-sm shadow-black/10 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:border-accent transition-all duration-300">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>

            <div className="mb-8 text-[#343434] ">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-tight font-urbanist">
                {item.description}
              </p>
            </div>

            <div className="text-3xl text-[#343434]">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
