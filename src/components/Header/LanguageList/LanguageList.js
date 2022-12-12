import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageListItem from '../LanguageListItem/LanguageListItem';
import api from '../../../api';
import { useLocation, useMatch, matchPath, useNavigation, useParams, useNavigate } from 'react-router-dom';

function LanguageList({ curLang, setCurLang }) {
   let {lang} = useParams(":lang")
   const match = useLocation()
   const navigate = useNavigate()
   const params = useParams(":lang")
   console.log(match.pathname.substring(1,2))   
   const [langList] = useState([
      { lang: 'English', langISO: 'en' },
      { lang: 'Deutsch', langISO: 'de' },
      { lang: 'Français', langISO: 'fr' },
      { lang: '한국어', langISO: 'ko' },
      { lang: 'Español', langISO: 'es' },
      { lang: 'Türkçe', langISO: 'tr' },
   ]);
   const { i18n } = useTranslation();
   const swichLanguage = (language) => {
      i18n.changeLanguage(language);
   };

   useEffect(() => {
      const getLang = localStorage.getItem('i18nextLng');
      const curName = langList.find((item) => item.langISO === params.lang) || langList[0];
      setCurLang({ languageNamed: curName.lang, langISO: params.lang });

   }, []);

   function langSwitch(e) {
      const curName = langList.find((item) => item.langISO === e.target.value);
      setCurLang({ languageNamed: curName.lang, langISO: e.target.value });
      navigate(`/${e.target.value}${match.pathname.length > 3 ? match.pathname.substring(3,match.pathname.length) : ''}`)
      console.log(e.target.value)
      api.post('/api/v1/language', { language: e.target.value });
   }
   return (
      <ul className="website-settings-list">
         {langList.map((item) => (
            <LanguageListItem
               key={item.langISO}
               item={item}
               swichLanguage={swichLanguage}
               langSwitch={langSwitch}
               currentLanguage={curLang.langISO}
            />
         ))}
      </ul>
   );
}

export default LanguageList;
