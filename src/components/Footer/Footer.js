import soc1 from '../../img/footer/soc-1.svg'
import soc2 from '../../img/footer/soc-2.svg'
import soc3 from '../../img/footer/soc-3.svg'
import soc4 from '../../img/footer/soc-4.svg'
import soc5 from '../../img/footer/soc-5.svg'
import soc6 from '../../img/footer/soc-6.svg'
import { ReactComponent as LogoFooter } from '../../img/footer/logo.svg'
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter, rootDomain } from '../../utils/usableFunctions'
import { NavLink, useParams } from 'react-router-dom'



const Footer = () => {
    const { t, i18n } = useTranslation()
    const { lang } = useParams(":lang")


    return (
        <footer className="footer">
            <div className="container-parent">
                <div className='mobile-logo-footer'>
                    <NavLink to={`/${lang}`}>
                        <LogoFooter />
                    </NavLink>
                </div>
                <div className="footer-row">
                    <div className='pc-logo-footer'>
                        <NavLink to={`/${lang}`}>
                            <LogoFooter />
                        </NavLink>
                    </div>
                    <div className="footer-col-1">
                        <h6 className="h6-heading">{t('aboutUs')}</h6>
                        <div className="footer-link">
                            <a href={`/${lang}/redirect/about`}>{t('aboutBityx')}</a>
                            <a target={"_blank"} href="https://docs.google.com/a/du2345wfeweddjSu3sd8asddfiu213yuis798dyhsh">{t('careers')}</a>
                            <a target={"_blank"} href="mailto:business@bityx.com">{t('businessContacts')}</a>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <h6 className="h6-heading">{t('legal')}</h6>
                        <div className="footer-link">
                            <a href="https://bityx.zendesk.com/hc/en-us/articles/11131301982225-Privacy-Policy">{t('privacyPolicy')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/articles/11131178673681-Terms-of-Use-ToU-">{t('termsOfUse')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/sections/11130507291921-Legal-Privacy">{t('legalStatement')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/sections/11130502707601-Security">{t('security')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/articles/11131421115793-AML-CFT-Policy">{t('amlPolicy')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/articles/11131419113233-Cookies-Policy">{t('cookiesPolicy')}</a>
                            <a href="https://bityx.zendesk.com/hc/en-us/articles/11131247080465-Risk-Warning">{t('riskWarning')}</a>
                        </div>
                    </div>
                    <div className="footer-col-3">
                        <h6 className="h6-heading">{t('service')}</h6>
                        <div className="footer-link">
                            <a href="https://bityx.zendesk.com/hc/en-us">{t('helpCenter')}</a>
                            <a href="https://bityx.com/fees">{t('fees')}</a>
                            <a href="https://bityx.com/dashboard/affiliates">{t('referrals')}</a>
                            <a href="https://bityx.com/dashboard/api/manage">{t('apiService')}</a>
                        </div>
                    </div>
                    <div className="footer-col-4">
                        <h6 className="h6-heading">{t('support')}</h6>
                        <div className="footer-link">
                            <a href="https://bityx.zendesk.com/hc/en-us/requests/new">Submit a Request</a>
                            <a href="https://bityx.zendesk.com/hc/en-us">Knowledge Base</a>
                        </div>
                    </div>
                    <div className="footer-col-5">
                        <h6 className="h6-heading">Community</h6>
                        <div className="footer-link social-icons">
                            <div className='facebook'>
                                <a href="https://www.facebook.com/groups/bityx" >
                                    <img src={soc1} alt="" />
                                </a>
                            </div>
                            <div className='twitter'>  <a href="https://twitter.com/BityxB" >
                                <img src={soc2} alt="" />
                            </a></div>
                            <div className='github'>
                                <a href="https://github.com/Bityxexchange" >
                                    <img src={soc3} alt="" />
                                </a>
                            </div>
                            <div className='reddit' >
                                <a href="https://www.reddit.com/user/Bityxexchange" >
                                    <img src={soc4} alt="" />
                                </a>
                            </div>
                            <div className='medium' >
                                <a href="https://medium.com/@Bityxexchange" >
                                    <img src={soc5} alt="" />
                                </a> </div>
                            <div className='steemit'>
                                <a href="https://steemit.com/@bityxexchange" >
                                    <img src={soc6} alt="" />
                                </a>
                            </div>
                        </div>
                        <h6 className=" footer-link-h6-heading">Community</h6>
                        <div className="footer-link-5-item">
                            <span>
                                {t('supportService')} :
                                <a href="mailto:support@bityx.com">support@bityx.com</a>
                            </span>
                            <span>
                                {t('tokenListings')} :
                                <a href="mailto:listing@bityx.com">listing@bityx.com</a>
                            </span>
                            <span>
                                {t('businessOffers')} :
                                <a href="mailto:business@bityx.com"> business@bityx.com</a>
                            </span>
                        </div>
                        <h6 className="footer-link-h6-heading_volume">{t('volume')}</h6>
                        <div className="footer-link footer-link-volume ">
                                <span>107,354,400.29 USDT 107,383,385.98 USD</span>
                                <span>
                                    {t('tokenListings')} :
                                    <a href="mailto:listing@bityx.com">listing@bityx.com</a>
                                </span>
                                <span>2022-09-15 04:54:51 (GMT+0) 30.7ms</span>
                        </div>
                    </div>
                </div>
                <div className='copyright-flex'>
                    <p className="copyright-text">{t('allRights')}</p>
                </div>
            </div>

        </footer>

    )
}

export default Footer