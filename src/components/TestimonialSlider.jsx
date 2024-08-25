import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const data = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16 text-[#343434]">
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
              <div className="flex flex-col justify-center items-center">
                <div className="mb-2 mx-auto">
                  <img src={item.image} width={100} height={100} alt="" />
                </div>

                <div className="text-lg">{item.name}</div>

                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {item.position}
                </div>
              </div>
            </div>

            <div className="flex-1 flex  flex-col justify-center before:w-[1px] xl:before:bg-black/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-black/20 mx-auto md:mx-0" />
              </div>

              <div className="xl:text-lg text-center md:text-left">
                {item.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
