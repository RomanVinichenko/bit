import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

import MainLoader from './ui/MainLoader/MainLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <>
      <Suspense fallback={<MainLoader />}>
         <App />
      </Suspense>
   </>
);
