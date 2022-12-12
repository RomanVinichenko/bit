import React from 'react';

function LanguageListItem({ item, swichLanguage, langSwitch, currentLanguage }) {
   return (
      <li key={item.langISO}>
         <label onChange={() => swichLanguage(item.langISO)} className="form-label website-settings-lang">
            {item.lang}
            <input onChange={langSwitch} type="radio" name="lang" value={item.langISO} checked={item.langISO === currentLanguage} />
            <span className="form-label-checkmark"></span>
         </label>
      </li>
   );
}

export default LanguageListItem;
