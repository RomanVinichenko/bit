import api from '../api';

export function getPairsList(query) {
   return api.get(`api/v1/pairs?second_ticker=${query}&limit=10`).then((res) => res.data.pairs);
}
