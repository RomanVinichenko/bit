import React, {useEffect, useState} from 'react';
import UserEnters from '../UserEnters/UserEnters';
import UserDropdown from '../UserDropdown/UserDropdown';
import UserOptions from '../UserOptions/UserOptions';
import logoMob from '../../../img/logo.svg'
import api from '../../../api';

function HeadreUserActions({auth}) {

  return (
    <ul className="nav-list-right">
      <li className="logo-mob-sign">
        <img src={logoMob} alt=""/>
      </li>
      {auth ? <UserDropdown auth={auth}/> : <UserEnters/>}
      <div className='display-control-mobile'>
        <UserOptions auth={auth}/>
      </div>
      <div className="switcher switcher-dark switcher-mobile">
        <button>
          <span></span>
        </button>
      </div>
    </ul>
  );
}

export default HeadreUserActions;
