import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Background } from './components/index'
import * as layouts from './layouts/index'
import * as s from './styled'
import { useWindowSize } from './hooks/index'
import api from 'api'
import { useNavigate, useParams } from 'react-router-dom'
import { TokenProvider } from './utils/token'
import Header from '../../components/Header/Header/Header'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

type Page =
  | 'Sign Up'
  | 'Sign In'
  | 'Activate account'
  | 'Authentication code'
  | 'Forgot password'
  | 'Change password'

type Props = {
  page: Page,
  emailValue: string,
  emailValue2: string,
}

const Authorization: FC<Props> = ({ page,emailValue,emailValue2 }) => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  const [check, setCheck] = useState(true)
  const params = useParams()
  const {t} = useTranslation()
  const [windowWidth] = useWindowSize()
  const [state, setState] = useState({
    type: '',
    email: '',
    phone: '',
    password: '',
    agree: null,
    refferal: ''
  })

  function closeMenu() {
    setMenuOpened(false)
  }

  function renderForm(): ReactNode {
    switch (page) {
      case 'Sign Up':
        return <layouts.SignUp comingValue2={emailValue2} comingValue={emailValue}  state={state} setState={setState} />
      case 'Sign In':
        return <layouts.SignIn state={state} setState={setState}  />
      case 'Activate account':
        return <layouts.ActivateAccount state={state}  />
      case 'Authentication code':
        return <layouts.AuthenticationCode state={state} setState={setState} />
      case 'Forgot password':
        return <layouts.ForgotPassword />
      case 'Change password':
        return <layouts.ChangePassword />
    }
  }

  return (
    <s.Container className="page">
      <Background />
      <Header />
      <s.Content>
        <s.GreetingBox>
          <div className="title">{t('beginYourCryptoJourning')}</div>
          <div className="description">{t('betterTradingLife')}</div>
        </s.GreetingBox>
        {renderForm()}
      </s.Content>
      {windowWidth <= 768 && (
        <layouts.MobileMenu opened={isMenuOpened} onCloseBtnClick={closeMenu} />
      )}
    </s.Container>
  )
}

export default Authorization
