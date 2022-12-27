import ios from '../../img/icons/ios.svg';
import android from '../../img/icons/android.svg';
import laptop from '../../img/home/laptop.png';
import fintech from '../../img/fintech.svg';
import galaxy_digital from '../../img/galaxy_digital.svg';
import people from '../../img/people.png';
import hsbc from '../../img/hsbc.svg';
import silvergate from '../../img/silvergate.svg';
import phones1 from '../../img/home/phones-mobile.svg';
import phoneMob1 from '../../img/home/phone-mob-1.svg';
import phoneMob2 from '../../img/home/phone-mob-2.svg';
import sig from '../../img/sig.svg';
import dukascopy from '../../img/dukascopy.svg';
import {ReactComponent as Portfel} from '../../img/home/portfel.svg';
import {ReactComponent as Reccuring} from '../../img/home/reccuring.svg';
import {ReactComponent as Vault} from '../../img/home/vault.svg';
import {ReactComponent as Mobile} from '../../img/home/mobile.svg';
import portfolio from '../../img/home/portfolio.png';
import {useEffect, useState} from 'react';
import {OptionsContext} from '../../App';
import CurrencyPairs from '../СurrencyPairsModul/CurrencyPairs/CurrencyPairs';
import {useTranslation} from 'react-i18next';
import {NavLink, useParams} from 'react-router-dom';

import Lottie from 'react-lottie-player'
import lottieJson from '../../lot.json'

const Main = ({emailValue, setEmailValue, emailValue2, setEmailValue2}) => {

  function lott() {
    return (
      <div>
        <Lottie
          loop
          autoPlay
          play
          animationData={lottieJson}
        />
      </div>
    )
  }

  const {t, i18n} = useTranslation()
  const {lang} = useParams(':lang')
  const [soonAvailable1, setSoonAvailable1] = useState(false)
  const [soonAvailable2, setSoonAvailable2] = useState(false)

  const [options, setOptions] = useState({currency: '', currencySign: ''});
  return (
    <OptionsContext.Provider value={{options, setOptions}}>
      <div className="wrapper">
        <section className="intro-section">
          <div className="main-lottie-anim">{lott()}</div>

          <div className="container-parent">
            <div className="intro-row">
              <div className="intro-col">
                <h1 className="trade-now-text">{t('tradeNow')}</h1>
                <p className="better-trading-small text">{t('betterTrading')}</p>
                <img className='phone1-main-new' src={phones1} alt=""/>
                <div className='flex-main-wrapper'>
                  <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                         type={"email"} placeholder={t('enterEmailAddress')}
                         className='email-input-main'/>
                  <div className="btn-group">
                    <NavLink to={`/${lang}/signup`} className="btn-main">
                      {t('getStartedButton')}
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="intro-col right-side">
                <div className='phones-main'>
                  <div className="phones-main-one">
                  <img className='phone1-main' src={phoneMob1}/>
                  </div>
                  <div className="phones-main-two">
                  <img className='phone2-main' src={phoneMob2}/>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-section">
          <div className="container-parent">
            <div className='partners-flex'>
                     <span className='h1-heading'>
                        {t('reliableInstitutionalAccess')}
                     </span>
            </div>
            <div className="partner-wrap">
              <div className="partner-row">
                <img src={fintech} className="partner-row-img" alt=""/>
                <img src={galaxy_digital} className="partner-row-img" alt=""/>
                <img src={hsbc} className="partner-row-img" alt=""/>
                <img src={silvergate} className="partner-row-img" alt=""/>
                <img src={sig} className="partner-row-img" alt=""/>
                <img src={dukascopy} className="partner-row-img" alt=""/>
              </div>
            </div>
            {/*<div className='more-button-container'>*/}
            {/*  <NavLink to={`/${lang}`}>*/}
            {/*    {t('learnMore')}*/}
            {/*  </NavLink>*/}
            {/*</div>*/}
          </div>
        </section>
        <CurrencyPairs/>
        <section className='portfolio-section'>
          <div className='container-parent'>
            <div className='make-your-portfolio'>
              <span className='h1-heading make-your-grow'>{t('makeYourGrowToday')}</span>
              <span className='make-your-portfolio-small-text'>{t('bityxHasPlentyFuture')}</span>
            </div>
            <div className='make-your-portfolio-flex'>
              <div className='make-your-portfolio-left'>
                <div className='portfolio-item'>
                  <div className='portfolio-svg'>
                    <Portfel/>
                  </div>
                  <div className='portfolio-item-text'>
                    <span className='h3-heading'>{t('manageYourPortfolio')}</span>
                    <span className='portfolio-item-small-text'>{t('buyAndVend')}</span>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-svg'>
                    <Reccuring/>
                  </div>
                  <div className='portfolio-item-text'>
                    <span className='h3-heading'>{t('recurringBuys')}</span>
                    <span className='portfolio-item-small-text'>{t('investCryptoCurrencies')}</span>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-svg'>
                    <Vault/>
                  </div>
                  <div className='portfolio-item-text'>
                    <span className='h3-heading'>{t('vaultProtection')}</span>
                    <span className='portfolio-item-small-text'>{t('addedSecurity')}</span>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-svg'>
                    <Mobile/>
                  </div>
                  <div className='portfolio-item-text'>
                    <span className='h3-heading'>{t('mobileApps')}</span>
                    <span className='portfolio-item-small-text'>{t('stayOnTop')}</span>
                  </div>
                </div>
              </div>
              <div className='make-your-portfolio-right'>
                <img src={portfolio}/>
              </div>
            </div>
          </div>
        </section>
        <section className='trades-section'>
          <div className='container-parent'>
            <div className="trade-wrapper">
              <div className="trade-title">
                <span className='trade-title-span'>{t('whyBityx')}</span>
              </div>
              <div className='trades-flex'>
                <div className='trade-item'>
                  <span className='trade-item-big-text'>$273M</span>
                  <p className='trade-item-small-text'>{t('dailyVolumeTraded')}</p>
                </div>
                <div className='trade-item'>
                  <span className='trade-item-big-text'>1M+</span>
                  <span className='trade-item-small-text'>{t('registeredUsers')}</span>
                </div>
                <div className='trade-item'>
                  <span className='trade-item-big-text'>1000+</span>
                  <span className='trade-item-small-text'>{t('institutionsRegistered')}</span>
                </div>
                <div className='trade-item'>
                  <span className='trade-item-big-text'>120+</span>
                  <span className='trade-item-small-text'>{t('countriesSupported')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='trade-like-pro-section'>
          <div className='container-parent'>
            <div className='trade-like-pro-main-flex'>
              <div className='trade-like-pro-right'>
                <img src={laptop}/>
              </div>
              <div className='trade-like-pro-flex'>
                <span className='trade-like-pro-main-flex-h1-heading'>{t('tradeLikePro')}</span>
                <div className='trade-like-pro-right-mobile'>
                  <img src={laptop}/>
                </div>
                <div className='trade-like-pro-left'>
                  <div className='trade-like-pro-item-absoulte-flex'>
                    <div className='trade-like-pro-item'>
                      <span className='trade-like-pro-item-big-text-1'>{t('professionalAccess')}</span>
                      <span className='trade-like-pro-item-small-text-1_1'>{t('weGiveUltraExpensiveAccess')}</span>
                    </div>
                    <div className='trade-like-pro-item'>
                      <span className='trade-like-pro-item-big-text-2'>{t('importantApis')}</span>
                      <span className='trade-like-pro-item-small-text-2_2'>{t('yourOwnTradingInterface')}</span>
                    </div>
                    <div className='trade-like-pro-item'>
                      <span className='trade-like-pro-item-big-text-3'>{t('constantSupport')}</span>
                      <span
                        className='trade-like-pro-item-small-text-3_3'>{t('premiumSupport')}</span>
                    </div>
                  </div>

                  <div className='more-pro-traders-flex'>
                    <NavLink to={`/${lang}`}>
                      <div className='more-pro-traders-item-blue-border'>
                        {t('moreProTraders')}
                      </div>
                    </NavLink>
                    <NavLink to={`/${lang}/signup`}>
                      <div className='mor-pro-traders-item-blue-bg'>
                        {t('getStartedButton')}
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="app-section">
          <div className="container-parent">
            <div className="app-row">
              <div className="app-col">
                <h2 className="h2-heading">{t('tradeOnGo')}</h2>
                <p className="text text-big">{t('tradingExpirence')}</p>
                <p className="text text-download-access">{t('downloadAcces')}</p>
                <div className="app-get">
                  <a className="app-link"
                     onMouseEnter={() => setSoonAvailable1(true)}
                     onMouseLeave={() => setSoonAvailable1(false)}
                     onClick={() => setSoonAvailable1(prev => !prev)}
                  >
                    {soonAvailable1 && (
                      <div className='will-available'>
                        {t('availableSoon')}
                      </div>
                    )}
                    <img src={ios} className="" alt=""/>
                    <span className="app-link-text">
                                 <span>{t('scanToDownload')}</span>
                                 <b>iOS App</b>
                              </span>
                  </a>
                  <a className="app-link"
                     onMouseEnter={() => setSoonAvailable2(true)}
                     onMouseLeave={() => setSoonAvailable2(false)}
                     onClick={() => setSoonAvailable2(prev => !prev)}>
                    {soonAvailable2 && (
                      <div className='will-available-2'>
                        {t('availableSoon')}
                      </div>
                    )}
                    <img src={android} className="" alt=""/>
                    <span className="app-link-text">
                                 <span>{t('scanToDownload')}</span>
                                 <b>iOS App</b>
                              </span>
                  </a>
                </div>
                <img className="people-one" src={people} alt="People"/>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe-section">
          <div className="container-parent">
            <h2 className="container-parent-h2-heading white">{t('joinTradersWorld')}</h2>
            <div className='subscribe-form-item'>
              <form action="" className="subscribe-form">
                <input type="email" value={emailValue2} onChange={e => setEmailValue2(e.target.value)}
                       className="form-input" placeholder={t('enterEmailAddress')}/>
                <NavLink to={`/${lang}/signup`} className="btn btn-white-fill">
                  {t('getStartedButton')}
                </NavLink>
              </form>
            </div>

          </div>
        </section>
      </div>

    </OptionsContext.Provider>
  )
}

export default Main