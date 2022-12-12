import React, { useContext, useEffect } from 'react';
import { OptionsContext } from '../../../App';
import TablePairsLoader from '../../../ui/TablePairsLoader/TablePairsLoader';
import CurrencyPairsListItem from '../CurrencyPairsListItem/CurrencyPairsListItem';
import { usePairsList } from '../hooks/usePairsList';

function CurrencyPairsList({ toggleTabs, tabNumber, criptoVal }) {
   const { list, fetchPairsList } = usePairsList(criptoVal);
   const { options } = useContext(OptionsContext);

   useEffect(() => {
      if (toggleTabs === tabNumber) {
         let listInterval = setInterval(() => {
            fetchPairsList();
         }, 10000);
         return () => {
            clearInterval(listInterval);
         };
      }
   }, [toggleTabs]);

   useEffect(() => {
      if (toggleTabs === tabNumber) {
         fetchPairsList();
      }
   }, [options]);

   if (list.length === 0)
      return (
         <div className={toggleTabs === tabNumber ? `b-tab active` : 'b-tab'}>
            <TablePairsLoader />
         </div>
      );

   return (
      <div className={toggleTabs === tabNumber ? `b-tab active` : 'b-tab'}>
         <table className="table">
            <tbody>
               <tr>
                  <th className="table-heading">Futures</th>
                  <th className="table-heading">Last Price</th>
                  <th className="table-heading">24H Change</th>
                  <th className="table-heading">24H Low</th>
                  <th className="table-heading">24H High</th>
                  <th className="table-heading">24H VOL</th>
               </tr>
               {list.map((pair) => (
                  <CurrencyPairsListItem key={pair.id} pair={pair} sign={options.currencySign} />
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default CurrencyPairsList;
