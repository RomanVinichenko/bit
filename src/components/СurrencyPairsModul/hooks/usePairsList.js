import { useCallback, useEffect, useState } from 'react';
import { getPairsList } from '../../../services/pairsList';

export function usePairsList(query) {
   const [list, setList] = useState([]);
   const fetchPairsList = useCallback(() => getPairsList(query).then(setList), [setList, query]);

   useEffect(() => {
      fetchPairsList();
   }, [fetchPairsList]);

   return { list, fetchPairsList };
}
