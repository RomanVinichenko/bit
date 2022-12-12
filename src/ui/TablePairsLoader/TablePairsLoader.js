import React from 'react';
import './TablePairsLoader.scss';

function TablePairsLoader() {
   let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   return (
      <table className="table table-load">
         <tbody>
            <tr>
               <th className="table-heading">Futures</th>
               <th className="table-heading">Last Price</th>
               <th className="table-heading">24H Change</th>
               <th className="table-heading">24H Low</th>
               <th className="table-heading">24H High</th>
               <th className="table-heading">24H VOL</th>
            </tr>
            {list.map((i) => (
               <tr key={i} className="load-table-row">
                  <td className=" table-item load-table-item"></td>
                  <td className=" table-item load-table-item"></td>
                  <td className=" table-item load-table-item"></td>
                  <td className=" table-item load-table-item"></td>
                  <td className=" table-item load-table-item"></td>
                  <td className=" table-item load-table-item"></td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default TablePairsLoader;
