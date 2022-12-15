import React, { useEffect, useState } from 'react';

import account from '../../../img/icons/account.svg';
import accountInfo from '../../../img/icons/account-info.svg';
import accountSecurity from '../../../img/icons/security.svg';
import accountVerification from '../../../img/icons/verification.svg';
import accountReferrals from '../../../img/icons/referrals.svg';
import accountLogout from '../../../img/icons/logout.svg';
import arrowBlue from '../../../img/icons/blue-arrow-right.svg'

import api from '../../../api';
import { NavLink, useParams } from 'react-router-dom';

function UserDropdown({ auth }) {
   const { lang } = useParams(":lang")
   const [display, setDisplay] = useState(true)
   const [user, setUser] = useState({ email: '*****@*****.***', uid: '**********' })
   useEffect(() => {
      if (auth) {
         document.querySelector('.account-settings-name-id').addEventListener('click', function () {
            // Get the text field
            var copyText = document.querySelector('.account-settings-name-id-number').textContent;
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText);
         });

         api.get(`api/v1/user`).then((res) => setUser({ email: res.data.email, uid: res.data.uid }))
      }
   }, []);

   return (
      <>
         {auth &&
            <>
               <div className='profile-parent-header-mobile'>
                  <span>Profile</span>
               </div>
               <li className="nav-list-item account-settings-select">
                  <a href="#" className='account-svg'>
                     <img src={account} alt="" />
                  </a>

                  <div className="account-settings">
                     <div className="account-settings-id">
                        <div className="account-settings-avatar">
                           <span>as</span>
                        </div>
                        <div className="account-settings-name">
                           <span className="account-settings-name-email">{user.email}</span>
                           <span className="account-settings-name-id">
                              UID: <span className="account-settings-name-id-number">{user.uid}</span>
                           </span>
                        </div>
                     </div>
                     <ul className="account-settings-list">
                        <li className="account-settings-dropdown">
                           <div className='account-info' onClick={() => setDisplay(prev => !prev)}>
                              <span>Account information</span>
                              <img src={arrowBlue} />
                           </div>
                        </li>
                        {display &&
                           <>
                              <li  id='hidden-id'>
                                 <a  href="/dashboard/security" className='account-settings-hidden-block'>
                                    <img src={accountSecurity} alt="" /> Security Settings
                                 </a>
                              </li>
                              <li  id='hidden-id'>
                                 <a href="/dashboard/verification" className='account-settings-hidden-block'>
                                    <img src={accountVerification} alt="" /> Verification
                                 </a>
                              </li>
                              <li  id='hidden-id'>
                                 <a href="/dashboard/affiliates" className='account-settings-hidden-block'>
                                    <img src={accountReferrals} alt="" /> Referrals
                                 </a>
                              </li>
                              <li  id='hidden-id' className='account-setting-logout'>
                                 <a href="/dashboard/affiliates" className='account-settings-hidden-block-logout'>
                                    <img src={accountLogout} alt="" /> 
                                    <span>Logout</span>
                                 </a>
                              </li>
                           </>
                        }
                     </ul>
                  </div>
               </li>
            </>
         }
      </>
   );
}

export default UserDropdown;
