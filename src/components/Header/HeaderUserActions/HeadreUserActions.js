import React, { useEffect, useState } from 'react';
import UserEnters from '../UserEnters/UserEnters';
import UserDropdown from '../UserDropdown/UserDropdown';
import UserOptions from '../UserOptions/UserOptions';
import api from '../../../api';

function HeadreUserActions({auth}) {

   return (
      <ul className="nav-list-right">
         {auth ? <UserDropdown auth={auth} /> : <UserEnters />}
         <div className='display-control-mobile'>
            <UserOptions auth={auth} />
         </div>
      </ul>
   );
}

export default HeadreUserActions;
