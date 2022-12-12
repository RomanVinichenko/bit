import bannerBg from '../../img/institutional/banner-bg.webp'
import bannerInnerImg from '../../img/institutional/banner-inner-img.webp'
import scopeImg1 from '../../img/institutional/scope-img-1.webp'
import scopeImg2 from '../../img/institutional/scope-img-2.webp'
import scopeImg3 from '../../img/institutional/scope-img-3.webp'
import scopeImg4 from '../../img/institutional/scope-img-4.webp'
import adv1 from '../../img/institutional/adv-1.png'
import adv2 from '../../img/institutional/adv-2.png'
import adv3 from '../../img/institutional/adv-3.png'
import adv4 from '../../img/institutional/adv-4.png'
import adv5 from '../../img/institutional/adv-5.png'
import adv6 from '../../img/institutional/adv-6.png'
import { useTranslation } from 'react-i18next'

const Institutional = () => {
    const {t, i18n } = useTranslation()
    
    return (
        <main className='mainWrapper'>
            <div className="banner-block">
                <img className="banner-bg" src={bannerBg} alt="banner-img-bg" />
                    <div className="container-institutnional banner-inner">
                        <div className="banner-left">
                            <h1>{t('institutionalServices')}</h1>
                            <img className="banner-mobile-img" src={bannerInnerImg} alt="banner-img" />
                                <p>{t('coinWanProvide')}</p>
                                <a className="banner-link" href="#">{t('applyNow')}</a>
                        </div>
                        <div className="banner-right">
                            <img className="banner-img" src={bannerInnerImg} alt="banner-img" />
                        </div>
                    </div>
            </div>
            <section className="scope">
                <div className="container-institutnional">
                    <h2>{t('institutionScope')}</h2>
                    <div className="scope-top">
                        <div className="scope-top-item dib">
                            <img src={scopeImg1} alt="img" />
                                <h3>{t('institutionAccount')}</h3>
                                <p>{t('institutionVerification2')}</p>
                                <div className="scope-top-link">
                                    <a className="dib" href="#">{t('institutionVerification')}</a>
                                </div>
                        </div>
                        <div className="scope-top-item dib">
                            <img src={scopeImg2} alt="img" />
                                <h3>{t('apiTrading')}</h3>
                                <p>{t('secureSpot')}</p>
                                <div className="scope-top-link">
                                    <a className="dib" href="#">{t('apiDocumentation')}</a>
                                </div>
                        </div>
                        <div className="scope-top-item dib">
                            <img src={scopeImg3} alt="img" />
                                <h3>{t('vipAccounts')}</h3>
                                <p>{t('coinwanOffers')}</p>
                                <div className="scope-top-link">
                                    <a className="dib" href="#">{t('applyNow')}</a>
                                </div>
                        </div>
                        <div className="scope-top-item dib scope-bottom-mobile">
                            <img src={scopeImg4} alt="img" />
                                <h3>{t('marketMaking')}</h3>
                                <p>{t('coinwanOffers2')}</p>
                                <div className="scope-top-link">
                                    <a className="dib" href="#">{t('marketMakerApp')}</a>
                                </div>
                        </div>
                    </div>
                    <div className="scope-bottom">
                        <div className="scope-bottom-item">
                            <h3>{t('marketMaking')}</h3>
                            <p>{t('coinwanOffers2')}</p>
                            <a className="scope-bottom-btn" href="#">{t('marketMakerApp')}</a>
                            <img src={scopeImg4} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="adv">
                <div className="container-institutnional">
                    <h2>{t('advantagesPrivileges')}</h2>
                </div>
                <div className="container-institutnional adv-item-wrap">
                    <div className="dib adv-item">
                        <img src={adv1} alt="img" />
                            <h4>{t('discountedFees')}</h4>
                            <ul>
                                <li>{t('discountedFees2')}</li>
                                <li>{t('zeroMaker')}</li>
                            </ul>
                    </div>
                    <div className="dib adv-item">
                        <img src={adv2} alt="img" />
                            <h4>{t('professionalTradingExperience')}</h4>
                            <ul>
                                <li>{t('apiLimits')}</li>
                                <li>{t('reduceTransactions')}</li>
                            </ul>
                    </div>
                    <div className="dib adv-item adv-item-last-in-row">
                        <img src={adv3} alt="img" />
                            <h4>{t('customerSupport')}</h4>
                            <ul>
                                <li>{t('accManager')}</li>
                                <li>{t('globalSupport')}</li>
                            </ul>
                    </div>
                    <div className="dib adv-item">
                        <img src={adv4} alt="img" />
                            <h4>{t('exclusiveWithdrawal')}</h4>
                            <ul>
                                <li>{t('customizedDaily')}</li>
                            </ul>
                    </div>
                    <div className="dib adv-item">
                        <img src={adv5} alt="img" />
                            <h4>{t('interestFree')}</h4>
                            <ul>
                                <li>{t('interestFreeSpot')}</li>
                            </ul>
                    </div>
                    <div className="dib adv-item adv-item-last-in-row">
                        <img src={adv6} alt="img" />
                            <h4>{t('moreToCome')}</h4>
                            <ul>
                                <li>{t('stayTurned')}</li>
                            </ul>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container-institutnional">
                    <div className="dib contact-left">
                        <h2>{t('contactUsText')}</h2>
                        <p>{t('vipPrivilegies')}</p>
                    </div>
                    <div className="dib contact-right">
                        <form action="" className="form">
                            <label className="dib label-margin">
                                <span>{t('name')}<span className="form-red">*</span></span>
                                <input type="text" placeholder="Name/Bitget UID" />
                            </label>
                            <label className="dib">
                                <span>{t('provideReasons')}<span className="form-red">*</span></span>
                                <input type="text" placeholder="For applying to be a Coinwan VIP." />
                            </label>
                            <label className="dib label-margin">
                                <span>{t('contactsAppText')}<span className="form-red">*</span></span>
                                <input type="text" placeholder="Telegram/WhatsApp/Line" />
                            </label>
                            <label className="dib file-label">
                                <span id="form-file-span">{t('uploadImage')}</span>
                                <input id="file-input" type="file" accept=".jpg, .jpeg, .png" />
                                    <p clss="file-input-info">{t('imageFormats')}</p>
                            </label>
                            <input className="input-submit" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Institutional