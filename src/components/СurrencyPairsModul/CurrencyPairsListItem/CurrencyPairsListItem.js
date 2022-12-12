import React, { useEffect, useState } from 'react';

function CurrencyPairsListItem({ pair, sign }) {
   const [resp, setResp] = useState({ sum: null, val: null });

   function replaceData(val) {
      return parseFloat(val.replace(/[,]/g, ''));
   }

   useEffect(() => {
      const result = ((1 - replaceData(pair.open_price) / replaceData(pair.last_price)) * 100).toFixed(2);
      if (Math.sign(result) === 1) {
         setResp({ sum: '+' + result, val: true });
      }
      if (Math.sign(result) === -1) {
         setResp({ sum: result, val: false });
      }
   }, []);

   return (
      <tr>
         <td className="table-item">
            {pair.first_ticker_name}/<span className="text-darkblue">{pair.second_ticker_name}</span>
         </td>
         <td className="table-item">
            {pair.last_price}{' '}
            <span className="text-darkblue">
               {sign}
               {pair.last_rated_price}
            </span>
         </td>
         <td className="table-item">
            <span className={resp.val ? 'profit-badge' : 'profit-badge decrease'}>{resp.sum}%</span>
         </td>
         <td className="table-item">{pair.low_price}</td>
         <td className="table-item">{pair.high_price}</td>
         <td className="table-item">{pair.volume}</td>
      </tr>
   );
}

export default CurrencyPairsListItem;
