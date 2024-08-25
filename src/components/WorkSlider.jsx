import { RxArrowTopRight, RxDesktop } from "react-icons/rx";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const data = {
  slides: [
    {
      images: [
        { path: "/thumb1.jpg" },
        { path: "/thumb4.jpg" },
        { path: "/thumb2.jpg" },
        { path: "/thumb3.jpg" },
      ],
    },
    {
      images: [
        { path: "/thumb2.jpg" },
        { path: "/thumb1.jpg" },
        { path: "/thumb4.jpg" },
        { path: "/thumb3.jpg" },
      ],
    },
    {
      images: [
        { path: "/thumb3.jpg" },
        { path: "/thumb1.jpg" },
        { path: "/thumb4.jpg" },
        { path: "/thumb2.jpg" },
      ],
    },
    {
      images: [
        { path: "/thumb4.jpg" },
        { path: "/thumb1.jpg" },
        { path: "/thumb2.jpg" },
        { path: "/thumb3.jpg" },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {data.slides.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {item.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <img src={image.path} width={500} height={300} alt="" />

                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent to-[#a6bd22] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
