import React, { useEffect } from "react";
import WorkData from "./work_data/WorkData";
import WorkDetails from "./work_data/WorkDetails";
import Aos from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const WorkExperience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-10/12 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold pl-8 mt-10 mb-2">
        Work Experience
      </h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="px-9 hidden lg:block"
      >
        <div>
          {WorkData.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <WorkDetails {...items} />
              </SwiperSlide>
            );
          })}{" "}
        </div>
      </Swiper>

      {/* mobile_responsib_show_1 */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="px-9 lg:hidden"
      >
        <div>
          {WorkData.map((items) => {
            return (
              <SwiperSlide key={items.id}>
                <WorkDetails {...items} />
              </SwiperSlide>
            );
          })}{" "}
        </div>
      </Swiper>
    </div>
  );
};
export default WorkExperience;
