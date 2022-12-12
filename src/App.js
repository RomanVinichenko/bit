import React, {createContext, useState} from 'react';
import 'swiper/css/bundle';
import './scss/base.scss';
import './scss/form.scss';
import './scss/table.scss';
import './scss/home.scss';
import './scss/app.scss';
import './scss/partner.scss';
import './scss/subscribe.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './components/Main/Main';
import MainLayout from './layouts/MainLayout/MainLayout';
import Languages from './components/Languages/Languages';
import Authorization from './layouts/AuthLayout/index.tsx';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';

export const OptionsContext = createContext(null);

const Home = () => {
   const [emailValue, setEmailValue] = useState('')
   const [emailValue2, setEmailValue2] = useState('')
   const [options, setOptions] = useState({ currency: '', currencySign: '' });

   return (
      <OptionsContext.Provider value={{ options, setOptions }}>
         <Router>
            <Routes>
               <Route path='/' element={<MainLayout />}>
                  <Route path='/:lang' element={<Main emailValue2={emailValue2} setEmailValue2={setEmailValue2} emailValue={emailValue} setEmailValue={setEmailValue} />} />
                  {/* <Route path='/:lang/institutional' element={<Institutional />} />    */}
                  <Route path='/:lang/edit-language' element={<Languages />} />
                  {/* <Route path='/:lang/markets' element={<Market />} />    */}
                  {/* <Route path='/:lang/protection' element={<Protection />} />    */}
               </Route>
               <Route path='/' element={<AuthLayout />}>
                  <Route exact path=":lang/signup" element={<Authorization emailValue2={emailValue2} emailValue={emailValue} page="Sign Up" />} />
                  <Route exact path=":lang/signin" element={<Authorization page="Sign In" />} />
                  <Route
                     path=":lang/activate"
                     element={<Authorization page="Activate account" />}
                  />
                  <Route
                     path=":lang/authentication"
                     element={<Authorization page="Authentication code" />}
                  />
                  <Route
                     path=":lang/forgotPassword"
                     element={<Authorization page="Forgot password" />}
                  />
                  <Route
                     path=":lang/resetPassword"
                     element={<Authorization page="Change password" />}
                  />
               </Route>
            </Routes>
         </Router>
      </OptionsContext.Provider>
   );
};

export default Home;
