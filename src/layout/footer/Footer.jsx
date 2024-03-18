import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>

        <div className='footer-contain'>
          <div className='container'>
            <div className='footer-contain-block'>
              <div className='row'>

                <div className='col-lg-2'>
                  <div className='footer-title title-phone is-mobile show'>Menü</div>
                  <div className='footer-title is-desktop'>Menü</div>
                  <div className='footer-contain-item is-mobile show'>
                    <div className='footer-contain-item-title style-obstruct'>
                      <Link to='/borsa'>Borsa</Link>
                      <Link to='/grafik'>Canli Borsa</Link>
                      <Link to='/about'>Borsa</Link>
                      <Link to='/contact'>Destek Merkezi</Link>
                    </div>
                  </div>
                  <div className='footer-contain-item is-desktop'>
                    <div className='footer-contain-item-title style-obstruct'>
                      <Link to='/borsa'>Borsa</Link>
                      <Link to='/grafik'>Canli Borsa</Link>
                      <Link to='/about'>Borsa</Link>
                      <Link to='/contact'>Destek Merkezi</Link>
                    </div>
                  </div>
                </div>

                <div className='col-lg-2'>
                  <div className='footer-contain-item additional-footer-item'>
                    <div className='footer-title'>Destek Hatti</div>
                    <a href="tel:012345678">
                      <img src="/images/icon-phone.svg" alt="" />
                      <p>012345678</p>
                    </a>
                  </div>

                  <div className='footer-contain-item additional-footer-item'>
                    <div className='footer-title'>Address</div>
                    <p>Bestekar Saadettin Kaynak Sokak, No:3 / 1 Altunizade Mahallesi, Üsküdar, İstanbul, 34662</p>
                  </div>

                  <div className='footer-contain-item'>
                    <div className='footer-contain-item-social'>
                      <div className='footer-contain-item-social-title'>
                        <h5>Sosyal Medya</h5>
                      </div>
                      <div className='footer-contain-item-social-icon'>
                        <div className='footer-contain-item-social-icon-item'>
                          <a href="">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_5760_14576)">
                                <path d="M7.87847 4.95684C5.64253 4.95684 3.83901 6.76035 3.83901 8.99629C3.83901 11.2322 5.64253 13.0357 7.87847 13.0357C10.1144 13.0357 11.9179 11.2322 11.9179 8.99629C11.9179 6.76035 10.1144 4.95684 7.87847 4.95684ZM7.87847 11.6225C6.43355 11.6225 5.2523 10.4447 5.2523 8.99629C5.2523 7.54785 6.43003 6.37012 7.87847 6.37012C9.32691 6.37012 10.5046 7.54785 10.5046 8.99629C10.5046 10.4447 9.32339 11.6225 7.87847 11.6225ZM13.0253 4.7916C13.0253 5.31543 12.6035 5.73379 12.0832 5.73379C11.5593 5.73379 11.141 5.31191 11.141 4.7916C11.141 4.27129 11.5628 3.84941 12.0832 3.84941C12.6035 3.84941 13.0253 4.27129 13.0253 4.7916ZM15.7007 5.74785C15.641 4.48574 15.3527 3.36777 14.4281 2.44668C13.507 1.52559 12.389 1.2373 11.1269 1.17402C9.82612 1.1002 5.9273 1.1002 4.62651 1.17402C3.36792 1.23379 2.24995 1.52207 1.32534 2.44316C0.400733 3.36426 0.115967 4.48223 0.0526856 5.74434C-0.0211426 7.04512 -0.0211426 10.9439 0.0526856 12.2447C0.112451 13.5068 0.400733 14.6248 1.32534 15.5459C2.24995 16.467 3.3644 16.7553 4.62651 16.8186C5.9273 16.8924 9.82612 16.8924 11.1269 16.8186C12.389 16.7588 13.507 16.4705 14.4281 15.5459C15.3492 14.6248 15.6375 13.5068 15.7007 12.2447C15.7746 10.9439 15.7746 7.04863 15.7007 5.74785ZM14.0203 13.6404C13.746 14.3295 13.2152 14.8604 12.5226 15.1381C11.4855 15.5494 9.02456 15.4545 7.87847 15.4545C6.73237 15.4545 4.26792 15.5459 3.23433 15.1381C2.54526 14.8639 2.0144 14.333 1.73667 13.6404C1.32534 12.6033 1.42026 10.1424 1.42026 8.99629C1.42026 7.8502 1.32886 5.38574 1.73667 4.35215C2.01089 3.66309 2.54175 3.13223 3.23433 2.85449C4.27144 2.44316 6.73237 2.53809 7.87847 2.53809C9.02456 2.53809 11.489 2.44668 12.5226 2.85449C13.2117 3.12871 13.7425 3.65957 14.0203 4.35215C14.4316 5.38926 14.3367 7.8502 14.3367 8.99629C14.3367 10.1424 14.4316 12.6068 14.0203 13.6404Z" fill="white"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_5760_14576">
                                  <rect width="15.75" height="18" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 512 512">
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </a>
                          <a href="">
                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_5760_14561)">
                                                    <path d="M9.09091 0C4.07045 0 0 4.07046 0 9.09091C0 13.6485 3.35758 17.4121 7.73182 18.0697V11.5H5.48258V9.11061H7.73182V7.52045C7.73182 4.88788 9.01439 3.73258 11.2023 3.73258C12.25 3.73258 12.8045 3.81061 13.0667 3.84545V5.93106H11.5742C10.6455 5.93106 10.3212 6.81212 10.3212 7.80455V9.11061H13.0432L12.6742 11.5H10.3212V18.0886C14.7583 17.4871 18.1818 13.6932 18.1818 9.09091C18.1818 4.07046 14.1114 0 9.09091 0Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5760_14561">
                                                        <rect width="18.1818" height="18.1818" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                          </a>
                        </div>
                        <div className='footer-contain-item-social-icon-item'>
                          <a href="">
                          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_5760_14565)">
                                                    <path d="M14.625 1.125H1.12148C0.502734 1.125 0 1.63477 0 2.26055V15.7395C0 16.3652 0.502734 16.875 1.12148 16.875H14.625C15.2437 16.875 15.75 16.3652 15.75 15.7395V2.26055C15.75 1.63477 15.2437 1.125 14.625 1.125ZM4.76016 14.625H2.42578V7.10859H4.76367V14.625H4.76016ZM3.59297 6.08203C2.84414 6.08203 2.23945 5.47383 2.23945 4.72852C2.23945 3.9832 2.84414 3.375 3.59297 3.375C4.33828 3.375 4.94648 3.9832 4.94648 4.72852C4.94648 5.47734 4.3418 6.08203 3.59297 6.08203ZM13.5105 14.625H11.1762V10.9688C11.1762 10.0969 11.1586 8.97539 9.96328 8.97539C8.74687 8.97539 8.56055 9.92461 8.56055 10.9055V14.625H6.22617V7.10859H8.46562V8.13516H8.49727C8.81016 7.54453 9.57305 6.92227 10.7086 6.92227C13.0711 6.92227 13.5105 8.47969 13.5105 10.5047V14.625Z" fill="white"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5760_14565">
                                                        <rect width="15.75" height="18" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                          </a>
                          <a href="">
                          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.83376 0C10.0194 0.00697882 14.017 0.053039 15.1419 0.357037C15.8734 0.554216 16.4494 1.13516 16.6449 1.87282C16.9718 3.10289 16.9979 5.56248 17 5.94814V6.05092C16.9979 6.43658 16.9718 8.89613 16.6449 10.1263C16.4494 10.8639 15.8734 11.4449 15.1419 11.642C13.9367 11.9677 9.4336 11.9973 8.62481 12H8.37519C7.5664 11.9973 3.0633 11.9677 1.85807 11.642C1.12664 11.4449 0.550583 10.8639 0.355056 10.1263C0.0282372 8.89613 0.00209164 6.43658 0 6.05092V5.94814C0.00209164 5.56248 0.0282372 3.10289 0.355056 1.87282C0.550583 1.13516 1.12664 0.554216 1.85807 0.357037C2.98295 0.053039 6.98064 0.00697882 8.16624 0H8.83376ZM6.79996 3.40564V8.4712L11.2433 5.93849L6.79996 3.40564Z" fill="white"></path>
                                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='col-lg-8'>
                  <div className='footer-contain-block-description'>
                    <p>Yatırım hizmet ve faaliyetleri, Sermaye Piyasası tarafından yetkilendirilen lisanslı Midas Menkul Değerler A.Ş tarafından sunulmaktadır. Sunulan hizmetlere erişim Kognivia Yazılım A.Ş. (‘Midas Finansal Teknolojiler’) tarafından sağlanan Midas mobil uygulaması üzerinden sağlanmaktadır.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='footer-contain-second'>
          <div className='container'>
            <div className='footer-contain-second-block'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='footer-contain-second-block-item-first'>
                    <p>© 2024  Finansal Teknolojiler (Kognivia Yazılım A.Ş) Tüm hakları saklıdır.</p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='footer-contain-second-block-item-second'>
                    <Link to="/contact">Destek Merkezi</Link>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='footer-contain-second-block-item-third'>
                    <Link to=''>
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M0 4.70605H4.70588V20.0002H0V14.1178H4.70588V9.41194H0V4.70605Z" fill="black"></path>
                                        <rect x="4.70587" width="11.7647" height="4.70588" fill="black"></rect>
                                        <rect x="4.70581" y="9.41211" width="9.41177" height="4.70588" fill="black"></rect>
                                    </g>
                                </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>

      
    </>
  )
}

export default Footer
