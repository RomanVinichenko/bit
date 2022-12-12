
import React, { FC, useState } from 'react'
import { Input, Dropdown, Checkbox, Button, QrCode } from '../../components'
import _tempQr from '../../../../img/qr-code.png'
import { SignInTabs } from '../../layouts/sign-in/index'
import * as s from './styled'
import api from 'api'
import { useNavigate, useParams } from 'react-router-dom'
import { TokenProvider } from '../../utils/token'
import { useTranslation } from 'react-i18next'


interface Props {
  tab: SignInTabs,
  state?: any,
  setState?: any,
}

const TabContent: FC<Props> = ({ tab,state,setState }) => {
  const [checked, setChecked] = useState(false)
  const {t} = useTranslation()
  const [phoneValue, setPhoneValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')
  const [refferal, setRefferal] = useState('')
  const [error, setError] = useState('')
  const [test, setTest] = useState(false)
  const [validation, setValidation] = useState(true)
  const [validate, setValidate] = useState({
    email: '',
    password: ''
  })
  const params = useParams()
  const navigate = useNavigate()
  function renderLoginInput() {
    switch (tab) {
      case 'phone':
        return (
          <Input
            name="phone"
            type="text"
            label="Phone"
            value={phoneValue}
            setValue={setPhoneValue}
            placeholder={t('enterPhone')}
          />
        )
      case 'email':
        return (
          <Input
            name="email"
            type="email"
            label="Email"
            value={emailValue}
            setValue={setEmailValue}
            placeholder={t("enterEmailAddress")}
          />
        )
    }
  }
  
  const onLoginClick = () => {
    setValidation(true)
    if(tab == 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)){
      setError('Invalid email address')
      setValidation(false)
    }
    if(tab == 'phone' && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phoneValue)){
      setError('Wrong phone number')
      setValidation(false)
    }
    if(password.length < 6){
      setError('Password length must be greater than 6 characters')
      setValidation(false)
    }
    if(tab == 'email' && validation == true){
      api.post('/api/v1/signin/step/1', {type: tab, email: emailValue, password: password}).then(resp => {
        if(resp.data.authentication == true){
          setState((prev: any) => ({
            ...prev,
            type: tab,
            email: emailValue,
            phone: '',
            password: password,
            agree: checked,
          }))
          navigate(`/${params.lang}/activate`)
        }else if(resp.data.success == true){
          TokenProvider.setAccessToken(resp.data.access_token);
          TokenProvider.setRefreshToken(resp.data.refresh_token);
          navigate(`/${params.lang}${resp.data.redirect}`)
        }else{
          setError(resp.data.error)
        }
      }).catch(response => {
        setError(response.response.data.error)
      })
  }else if(tab == 'phone' && validation == true){
      api.post('/api/v1/signin/step/1', {type: tab, phone: phoneValue, password: password}).then(resp => {
        if(resp.data.authentication == true){
          setState((prev: any) => ({
            ...prev,
            type: tab,
            email: '',
            phone: phoneValue,
            password: password,
            agree: checked,
          }))
          navigate(`/${params.lang}/authentication`)
        }else if(resp.data.success == true){
          TokenProvider.setAccessToken(resp.data.access_token);
          TokenProvider.setRefreshToken(resp.data.refresh_token);
          navigate(`/${params.lang}${resp.data.redirect}`)
        }else{
          setError(resp.data.error)
        }
      }).catch(response => {
        setError(response.response.data.error)
      })
    }
    
  }

  function renderContent() {
    if (tab === 'qr') {
      return (
        <div className="qr-wrapper">
          <QrCode url={_tempQr} />
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="fields">
          {renderLoginInput()}
          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
            placeholder={t('enterPassword')}
          />
        </div>
        {error != '' && 
          <div className='auth-error'>
            <span>{error}</span>
          </div>
        }
        <div className='get-started-sign-in'>
          <Button onClick={onLoginClick}>{t("getStartedButton")}</Button>
        </div>
      </React.Fragment>
    )
  }

  return <s.Container>{renderContent()}</s.Container>
}

export default TabContent
