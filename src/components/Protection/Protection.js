import { useTranslation } from 'react-i18next'
import protectionMain from '../../img/protection/protection-main.png'
import reliable from '../../img/protection/reliable.png'
import efficient from '../../img/protection/efficient.png'
import transperent from '../../img/protection/transperent.png'
import '../../scss/protection.scss'
import { useEffect, useState } from 'react'

const Protection = () => {
    const {t, i18n } = useTranslation()
    const [faqStates, setFaqStates] = useState({
        state1: false,
        state2: false,
        state3: false,
    })
    let faqItems = [
        {
            id: 1,
            title: 'protectionText12',
            description: 'protectionText13',
            state: faqStates.state1,
            setState: () => setFaqStates(prev => ({...prev, state1: !faqStates.state1}))
        },
        {
            id: 2,
            title: 'protectionText14',
            description: 'protectionText15',
            state: faqStates.state2,
            setState: () => setFaqStates(prev => ({...prev, state2: !faqStates.state2}))
        },
        {
            id: 3,
            title: 'protectionText16',
            description: 'protectionText17',
            state: faqStates.state3,
            setState: () => setFaqStates(prev => ({...prev, state3: !faqStates.state3}))
        },
    ]

    return (
        <>
        <div>
            <div className='protection-main'>
                <div className='protection-funds-container'>
                    <div className='protection-funds-left'>
                        <span className='protection-text-1'>{t('protectionText1')}</span>
                        <span className='protection-text-2'>{t('protectionText2')}</span>
                        <span className='protection-text-3'>{t('protectionText3')}</span>
                        <div className='protection-info-1'>
                            <div className='protection-info-child'>
                                <span className='protection-crypto-count'>6000 BTC</span>
                                <div className='protection-crypto-wallets'>
                                    <a>Wallet 1</a>
                                    <a className='protection-text-22'>Wallet 2</a>
                                </div>
                            </div>
                            <div className='protection-info-child-2'>
                                <span className='protection-crypto-count'>80 million USDT</span>
                                <div className='protection-crypto-wallets'>
                                    <a>Wallet 3</a>
                                    <a className='protection-text-22'>Wallet 4</a>
                                </div>
                            </div>
                        </div>
                        <span className='protection-text-4'>{t('protectionText4')}</span>
                    </div>
                    <div className='protection-funds-right'>
                        <img src={protectionMain} />
                    </div>
                </div>
                <div className='protection-funds-highlights'>
                    <span className='protection-text-5'>{t('protectionText5')}</span>
                    <div className='protection-funds-highlights-container'>
                        <div className='protection-funds-child'>
                            <img className='protection-funds-child-image'src={transperent} />
                            <span className='protection-funds-child-bold-text'>{t('protectionText6')}</span>
                            <span className='protection-funds-child-small-text'>{t('protectionText7')}</span>
                        </div>
                        <div className='protection-funds-child'>
                            <img className='protection-funds-child-image'src={reliable} />
                            <span className='protection-funds-child-bold-text'>{t('protectionText8')}</span>
                            <span className='protection-funds-child-small-text'>{t('protectionText9')}</span>
                        </div>
                        <div className='protection-funds-child'>
                            <img className='protection-funds-child-image'src={efficient} />
                            <span className='protection-funds-child-bold-text'>{t('protectionText10')}</span>
                            <span className='protection-funds-child-small-text'>{t('protectionText11')}</span>
                        </div>
                    </div>
                </div>
                <div className='protection-funds-faq'>
                    <div className='protection-faq-text'>
                        <span>FAQ</span>
                    </div>
                    {faqItems.map((el, i) => (
                    <div key={i} className='protection-funds-faq-child'>
                        <div className='protection-funds-faq-child-flex' onClick={el.setState}>
                            <span>{t(el.title)}</span>
                            <svg width="15px" fill='#1da2b4' height="15px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z"/></svg>
                        </div>
                        {el.state === true && <span className='protection-funds-faq-small-text'>{t(el.description)}</span>}


                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='protection-funds-trade'>
            <div>
                <div className='protection-funds-bg-container'>
                    <span className='protection-trade-text-1'>{t('protectionText18')}</span>
                    <span className='protection-trade-text-2'>{t('protectionText19')}</span>
                    <div className='register-button-trade'>
                        {t('protectionText20')}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Protection