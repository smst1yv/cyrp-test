import React from 'react'

const Mainimage = () => {
    return (
        <>
            <section className='freedom-of-investment fadeInUp-scroll visible mbr'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='freedom-of-investment-head'>
                                <div className='freedom-of-investment-head-title fadeInUp-scroll visible'>
                                    <h1>İstanbul Borsaları Tek Websitede!</h1>
                                </div>
                                <div className='freedom-of-investment-head-description fadeInUp-scroll visible'>
                                    <p>Midas yatırım hesabın ile ABD borsalarındaki dünya devlerine dilediğin tutarla yatırım yaparak ortak olabilir, Borsa İstanbul’daki Türk şirketlerine düşük komisyon ve masrafsız işlem avantajı ile yatırım yapabilirsin.</p>
                                </div>
                            </div>
                            <div className='freedom-of-investment-body'>
                                <img className='icon-1' src="/images/dollar-50.png" alt="" />
                                <img className='icon-2' src="/images/amazon.png" alt="" />
                                <img className='icon-3' src="/images/apple.png" alt="" />
                                <img className='icon-4' src="/images/tesla.png" alt="" />
                                <img className='icon-5' src="/images/dollar-10.png" alt="" />
                                <img className='icon-6' src="/images/aselsan.png" alt="" />
                                <img className='icon-7' src="/images/turkcell.png" alt="" />
                                <img className='icon-8' src="/images/migros.png" alt="" />
                                <video src="/images/c-video.mp4" poster='https://webcdn.getmidas.com/uploads/2022/09/ABD_00000.png' className='hero-group-video' playsInline autoPlay></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainimage
