import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay ,EffectFade} from 'swiper';
// import slides from './images.js'
import 'swiper/swiper-bundle.min.css';
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from './Card';




const Slider2 = () => {
    const slides=[
        <Card img="UserImage.png" heading="Community Meet" time="10:00 A.M - 12:00 P.M" date="Monday/september 2023" para="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews."/>,
        <Card img="comm.webp" heading="Web Dev" time="09:00 A.M - 11:00 A.M" date="Thursday/October 2023" para="Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences."/>,
        <Card img="logo192.png" heading="Fun Activities" time="04:00 P.M - 07:00 P.M" date="Saturday/November 2023" para="Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter."/>,
    ]
  return (
    <div className=' bg-[#121212] px-3'>
        <h1 className='text-[#ff000d] text-4xl sm:text-5xl  text-center pt-8 pb-[2rem] sm:pb-[4rem] font-bold tracking-wider'>Latest Events</h1>
        <Swiper
         
        modules={[Navigation, A11y,Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >

    {slides.map((slide) => {
        return <SwiperSlide>{slide}</SwiperSlide>

    })}
      
      ...
    </Swiper>

    {/* <img src={slides[0].img} alt="" /> */}

    
    



   
    </div>
  )
}

export default Slider2