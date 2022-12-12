import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function UserEnters() {
   const params = useParams(':lang')
   useEffect(() => {
      let menu = document.getElementById('slideout-menu');
      let signInButton = document.getElementById('sign-in-button-header')
      let signUpButton = document.getElementById('sign-up-button-header')
      signInButton.addEventListener('click', function (e) {
         setTimeout(() => {
            e.preventDefault();
            menu.classList.remove('is-open');
            document.body.classList.remove('header-open');
         },100)
      });
      signUpButton.addEventListener('click', function (e) {
         setTimeout(() => {
            e.preventDefault();
            menu.classList.remove('is-open');
            document.body.classList.remove('header-open');
         },100)
      });
   }, [])
   return (
      <div className='nav-list-padding'>
         <li id='sign-in-button-header' className="sign-in-button">
            <NavLink to={`/${params.lang}/signin`}>Sign In</NavLink>
         </li>
         <li id='sign-up-button-header' className="nav-list-item-btn">
            <NavLink to={`/${params.lang}/signup`} className="btn-primary-blue">
               Get Started
            </NavLink>
         </li>
      </div>
   );
}

export default UserEnters;
