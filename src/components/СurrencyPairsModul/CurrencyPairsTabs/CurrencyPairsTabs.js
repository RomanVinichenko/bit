import React, { useState } from 'react';
import CurrencyPairsList from '../CurrencyPairsList/CurrencyPairsList';

function CurrencyPairsTabs() {
   const [toggleTabs, setToggleTabs] = useState(1);

   return (
      <div className="table-container">
         <div className="tabs-nav">
            <button onClick={() => setToggleTabs(1)} className={toggleTabs === 1 ? 'b-nav-tab active' : 'b-nav-tab '}>
               USDT
            </button>
            <button onClick={() => setToggleTabs(2)} className={toggleTabs === 2 ? 'b-nav-tab active' : 'b-nav-tab '}>
               USDC
            </button>
            <button onClick={() => setToggleTabs(3)} className={toggleTabs === 3 ? 'b-nav-tab active' : 'b-nav-tab '}>
               BTC
            </button>
         </div>
         <CurrencyPairsList toggleTabs={toggleTabs} tabNumber={1} criptoVal={'usdt'} />
         <CurrencyPairsList toggleTabs={toggleTabs} tabNumber={2} criptoVal={'usdc'} />
         <CurrencyPairsList toggleTabs={toggleTabs} tabNumber={3} criptoVal={'btc'} />
      </div>
   );
}

export default CurrencyPairsTabs;
