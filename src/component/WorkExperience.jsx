import React from 'react'
import WorkData from './work_data/WorkData';
import WorkDetails from './work_data/WorkDetails';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const WorkExperience = () => {
  return (
    <div className="w-10/12 lg:w-11/12 mx-auto">
      <h3 className='text-2xl font-mono font-semibold pl-8 mt-10 mb-2'>Work Experience</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}      
        navigation={true}
        modules={[Navigation]}
        className='px-9 hidden lg:block'
      >   
      <div>
      {
        WorkData.map((items) => {
          return  <SwiperSlide key={items.id}>
           <WorkDetails {...items}/>
           </SwiperSlide>
        })
       }    </div> 
      </Swiper>


      {/* mobile_responsib_show_1 */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}      
        navigation={true}
        modules={[Navigation]}
        className='px-9 lg:hidden'
      >   
      <div>
      {
        WorkData.map((items) => {
          return  <SwiperSlide key={items.id}>
           <WorkDetails {...items}/>
           </SwiperSlide>
        })
       }    </div> 
      </Swiper>
    </div>
  )
}
export default WorkExperience