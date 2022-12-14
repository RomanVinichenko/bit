import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Swiper from 'swiper/bundle';
import CurrencyPairsTabs from '../CurrencyPairsTabs/CurrencyPairsTabs';
import bityx1 from '../../../img/home/bityx1.png';
import bityx2 from '../../../img/home/bityx2.png';
import bityx3 from '../../../img/home/bityx3.png';
import bityx4 from '../../../img/home/bityx4.png';

function CurrencyPairs() {
   const {t, i18n } = useTranslation()

   useEffect(() => {
      // addclass to body
      document.body.classList.add('dark-bg');
      new Swiper('.intro-swiper', {
         // Optional parameters
         autoplay: {
            delay: 4500,
         },
         breakpoints: {
            1000:{
               slidesPerView: 4,
               spaceBetween: 32,
            },
            820:{
               slidesPerView: 3,
               spaceBetween: 5,
            },
            350: {
               slidesPerView: 1,
               spaceBetween: 5,
            },
         },

         // Navigation arrows
         navigation: {
            nextEl: '.intro-swiper-button-next',
            prevEl: '.intro-swiper-button-prev',
         },
      });
   }, []);

   return (
      <section className="table-section">
         <div className="container-parent">
            <div className="table-wrapper">
               <div className="table-above-text">
                  <a href="#" className="hot-link">
                     {t('individualCompetintion')}
                  </a>
                  <a href="#" className="hot-link">
                     {t('bityxCompetition')}
                  </a>
                  <a href="#" className="hot-link">
                     {t('bityxLaunches')}
                  </a>
                  <a href="#">{t('suspensionAnouncment')}</a>
                  <a href="#" className="more-link">
                     More
                  </a>
               </div>
               {/* <div className='table-above-text'>
                  <img src={nft1} />
                  <img src={nft2} />
                  <img src={nft3} />
                  <img src={nft4} />
               </div> */}
               <div className="swiper intro-swiper">
                  <div className="swiper-wrapper intro-swiper-wrapper">
                     <div className="swiper-slide intro-swiper-slide">
                        <img src={bityx1} alt="" />
                     </div>
                     <div className="swiper-slide intro-swiper-slide">
                        <img src={bityx2} alt="" />
                     </div>
                     <div className="swiper-slide intro-swiper-slide">
                        <img src={bityx3} alt="" />
                     </div>
                     <div className="swiper-slide intro-swiper-slide">
                        <img src={bityx4} alt="" />
                     </div>
                     <div className="swiper-slide intro-swiper-slide">
                        <img src={bityx4} alt="" />
                     </div>
                  </div>
                  <div className="swiper-button-prev intro-swiper-button-prev"></div>
                  <div className="swiper-button-next intro-swiper-button-next"></div>
               </div>
               <CurrencyPairsTabs />
            </div>
         </div>
      </section>
   );
}

export default CurrencyPairs;
