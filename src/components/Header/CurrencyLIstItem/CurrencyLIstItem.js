import React from 'react';

function CurrencyLIstItem({ item, currencySwitch, currentCurrency }) {
   return (
      <li key={item.currency}>
         <label className="form-label website-settings-currency">
            {item.currency}
            <input
               onChange={currencySwitch}
               type="radio"
               name="currency"
               checked={item.currency === currentCurrency}
               value={item.currency}
            />
            <span className="form-label-checkmark"></span>
         </label>
      </li>
   );
}

export default CurrencyLIstItem;
