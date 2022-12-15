import React, { useContext, useEffect, useState } from 'react';
import api from '../../../api';
import { OptionsContext } from '../../../App';
import CurrencyLIstItem from '../CurrencyLIstItem/CurrencyLIstItem';

function CurrencyList() {
   const [currencyList] = useState([
      { currency: 'USD', currencySign: '$' },
      { currency: 'EUR', currencySign: '€' },
      { currency: 'GBP', currencySign: '£' },
      { currency: 'JPY', currencySign: '¥' },
      { currency: 'KRW', currencySign: '₩' },
      { currency: 'CNY', currencySign: '¥' },
   ]);

   const { options, setOptions } = useContext(OptionsContext);

   useEffect(() => {
      const curCurrency = JSON.parse(localStorage.getItem('currency')) || { currency: 'USD', currencySign: '$' };
      setOptions({ ...options, currency: curCurrency.currency, currencySign: curCurrency.currencySign });
   }, []);

   function currencySwitch(e) {
      const curSign = currencyList.find((item) => item.currency === e.target.value);
      localStorage.setItem('currency', JSON.stringify({ currencySign: curSign.currencySign, currency: e.target.value }));
      setOptions({ ...options, currencySign: curSign.currencySign, currency: e.target.value });
      api.post('/api/v1/curency', { curency: e.target.value });
   }
   return currencyList.map((item) => (
      <CurrencyLIstItem key={item.currency} item={item} currencySwitch={currencySwitch} currentCurrency={options.currency} />
   ));
}

export default CurrencyList;
