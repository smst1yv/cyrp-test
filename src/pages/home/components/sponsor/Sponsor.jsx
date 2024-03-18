import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import { Autoplay } from 'swiper/modules';

const Sponsor = () => {
    return (
        <>
            <section className='reference-brands fadeInUp-scroll visible'>
                <div className='reference-brands-desktop'>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img height={60} src="/images/s-1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-2.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-3.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-4.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-2.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-3.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img height={60} src="/images/s-3.png" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}



export default Sponsor
