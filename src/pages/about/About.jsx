import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'
import '../../style/global.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <section className='plan-comparison fadeInUp-scroll visible'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2'>
                            <div className='plan-comparison-title'>
                                <h5>Hakkımızda</h5>
                                <h1>Yatırım dünyasını özgürleştirmek için yola çıktık.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-banner-slider fadeInUp-scroll visible'>
                <div className='container'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper2"
                    >
                        <SwiperSlide><img src="/images/sl1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl2.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl2.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl2.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl1.jpg" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="/images/sl2.jpg" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className='access-description fadeInUp-scroll visible'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='access-description-head'>
                                <p>“Yatırımın herkes için erişilebilir ve adil olması gerektiğine inanıyoruz. Amacımız ayrıcalıkların olmadığı, demokratik bir finansal yatırım deneyimi sunmak.” Bu sebeple Midas’ta alt limit, gizli ücretlendirme ve karmaşık işlemler yok; ekonomik etkenlerden bağımsız yatırım imkanı sunan bir bakış açısı var.

                                    Bu vizyonla, Amerika’nın en büyük borsalarından NASDAQ ve New York Stock Exchange (NYSE)’te bulunan yaklaşık 10 bin hisse senedine ve Borsa İstanbul’daki tüm Türk şirketlerine Midas yatırım hesabınla, masrafsız işlem ve düşük komisyon avantajıyla yatırım yapabilirsin
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <section className='counter fadeInUp-scroll visible'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='counter-block'>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-3 fadeInUp-scroll visible'>
                                            <div className='counter-block-item'>
                                                <h3>${counterOn && <CountUp start={0} end={12} duration={5} />}M</h3>
                                                <p>Toplam Grup Sermaye Tutarı</p>
                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-3 fadeInUp-scroll visible'>
                                            <div className='counter-block-item'>
                                                <h3>+{counterOn && <CountUp start={0} end={100} duration={5} />}</h3>
                                                <p>Grup Çalışan Sayısı</p>
                                            </div>
                                        </div>

                                        <div className='col-lg-3 col-md-3 fadeInUp-scroll visible'>
                                            <div className='counter-block-item'>
                                                <h3>${counterOn && <CountUp start={0} end={7} duration={5} />}B</h3>
                                                <p>İşlem Hacmi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollTrigger>

        </>
    );
};

export default About;
