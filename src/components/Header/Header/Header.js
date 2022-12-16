import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { capitalizeFirstLetter, rootDomain } from '../../../utils/usableFunctions';
import HeadreUserActions from '../HeaderUserActions/HeadreUserActions';
import bityx from '../../../img/logos/bityx.svg'
import {ReactComponent as Logo} from '../../../img/logo.svg'
import UserOptions from '../UserOptions/UserOptions';
import api from '../../../api'
function Header() {
   const { t } = useTranslation();
   const [auth,setAuth] = useState({})
   const domain = rootDomain(window.location.hostname)
   const { lang } = useParams(":lang")

   useEffect(() => {
      // Set Elements
      let menu = document.getElementById('slideout-menu');
      let toggleButton = document.getElementById('slideout-toggle');
      let closeButton = document.getElementById('slideout-close');
      let navListItem = document.querySelectorAll('#hidden-id')

      // Toggle Menu
      toggleButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.toggle('is-open');
         document.body.classList.add('header-open');
      });

      // Close Menu
      closeButton.addEventListener('click', function (e) {
         e.preventDefault();
         menu.classList.remove('is-open');
         document.body.classList.remove('header-open');
      });
      for (var i=0; i <navListItem.length; i++) {
         navListItem[i].addEventListener('click', function (e) {
            setTimeout(() => {
               e.preventDefault();
               menu.classList.remove('is-open');
               document.body.classList.remove('header-open');
            },100)
         });
       }

      // header burger
      // if (window.screen.width <= 992) {
      //    // moving the language/currency below other links
      //    let navListFirst = document.getElementsByClassName('nav-list-padding')[0];
      //    let websiteSettings = document.getElementsByClassName('website-settings-select')[0];

      //    // moving the elements to new container-parents
      //    navListFirst.appendChild(websiteSettings);
      // }
   }, []);

   useEffect(() => {
      api.get('api/v1/authorized').then(r => setAuth(r.data));
   }, []);

   return (
      <header className="header">
         <div className="container-parent">
            <nav className="nav">
               {/* <a href="/" className="logo"></a> */}
               <div className='header-logo-mobile'>
               <NavLink to={`/${lang}`}>
                     <Logo />
                  </NavLink>
               </div>
               <a id="slideout-close" className="slideout-close" href="#">
               </a>
                  <div className="nav-list-links slideout-menu" id="slideout-menu">
                     <NavLink to={`/${lang}`} className='header-logo-pc'>
                        <Logo />
                     </NavLink>
                     <ul className="nav-list">
                        <div className='nav-list-padding'>
                           <li className="nav-list-item" id='hidden-id'>
                              <a href="/exchange">{t('exchangeText')}</a>
                           </li>
                           <li className="nav-list-item"  id='hidden-id'>
                              <a href="/markets">{t('market')}</a>
                           </li>
                           <li className="nav-list-item"  id='hidden-id'>
                              <a href="https://bityx.zendesk.com/hc/">{t('supportText')}</a>
                           </li>
                           <li className="nav-list-item"  id='hidden-id'>
                              <a href="/">{t('buyCrypto')}</a>
                           </li>
                           <li className="nav-list-item"  id='hidden-id'>
                              <a href="/rewards">{t('rewardsCenter')}</a>
                           </li>
                        </div>
                        <div className='display-control-options'>
                        <UserOptions auth={auth.authorized} />
                        </div>
                     </ul>
                     <HeadreUserActions auth={auth.authorized} />
                  </div>
            </nav>
            <a id="slideout-toggle" className="slideout-toggle" href="#">
               <span></span>
               <span></span>
               <span></span>
            </a>
         </div>
      </header>
   );
}

export default Header;
