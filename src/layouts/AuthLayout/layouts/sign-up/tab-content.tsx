import api from 'api'
import { TokenProvider } from '../../utils/token'
import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Input, Dropdown, Checkbox, Button } from '../../components'
import * as s from './styled'
import { useTranslation } from 'react-i18next'

interface Props {
  tab: 'email' | 'phone',
  state?: any,
  setState?: any,
  comingValue: string,
  comingValue2: string,
}

const TabContent: FC<Props> = ({ tab, state, setState, comingValue,comingValue2 }) => {
  const [checked, setChecked] = useState(false)
  const {t} = useTranslation()
  const [phoneValue, setPhoneValue] = useState('')
  const [emailValue, setEmailValue] = useState(comingValue != '' ? comingValue : comingValue2)
  const [password, setPassword] = useState('')
  const [refferal, setRefferal] = useState('')
  const [error, setError] = useState('')
  const [test, setTest] = useState(false)
  const [validation, setValidation] = useState(true)
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

  const onRegisterClick = () => {
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
      api.post('/api/v1/signup/email/code/send', {email: emailValue}).then(res => {
        if(refferal != ''){
          api.post('/api/v1/signup/step/1', {type: tab, email: emailValue, password: password,agree: checked, refcode: refferal}).then(resp => {
            if(resp.data.confirmation == true){
              // api.post('/api/v1/signup/step/2', {type: tab, email: emailValue, password: password,agree: checked,code: res.data.code}).then(response => {
              //   console.log(response.data)
              // })
              setState((prev: any) => ({
                ...prev,
                type: tab,
                email: emailValue,
                phone: '',
                password: password,
                agree: checked,
                refferal: refferal
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
        }else{
          api.post('/api/v1/signup/step/1', {type: tab, email: emailValue, password: password,agree: checked}).then(resp => {
            if(resp.data.confirmation == true){
              // api.post('/api/v1/signup/step/2', {type: tab, email: emailValue, password: password,agree: checked,code: res.data.code}).then(response => {
              //   console.log(response.data)
              // })
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
        }
      }).catch(response => {
        setError(response.response.data.error)
      })
    }else if(tab == 'email' && validation == true){
      api.post('/api/v1/signup/phone/code/send', {phone: phoneValue}).then(res => {
        if(refferal !== ''){
          api.post('/api/v1/signup/step/1', {type: tab, phone: phoneValue, password: password,agree: checked, refcode: refferal}).then(resp => {
            if(resp.data.confirmation == true){
              // api.post('/api/v1/signup/step/2', {type: tab, phone: phoneValue, password: password,agree: checked,code: res.data.code}).then(response => {
              //   console.log(response.data)
              // })
              setState((prev: any) => ({
                ...prev,
                type: tab,
                email: '',
                phone: phoneValue,
                password: password,
                agree: checked,
                refferal:refferal,
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
        }else{
          api.post('/api/v1/signup/step/1', {type: tab, phone: phoneValue, password: password,agree: checked}).then(resp => {
            if(resp.data.confirmation == true){
              // api.post('/api/v1/signup/step/2', {type: tab, phone: phoneValue, password: password,agree: checked,code: res.data.code}).then(response => {
              //   console.log(response.data)
              // })
              setState((prev: any) => ({
                ...prev,
                type: tab,
                email: '',
                phone: phoneValue,
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
        }
      }).catch(response => {
        setError(response.response.data.error)
      })
    }
  }

  return (
    <s.Container>
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
        <Dropdown label={t('refferalCode')}>
          <Input name="referral-code" value={refferal} setValue={setRefferal} type="text" />
        </Dropdown>
      </div>
      <div className="terms-box">
        <Checkbox
          checked={checked}
          setChecked={setChecked}
          label={
            <div className='terms-flex'>
              {t('agreeTerms')}{' '}
              <a href="https://google.com">{t('termsOfUse')}</a>
            </div>
          }
        />
      </div>
      {error != '' && 
      <div className='auth-error'>
        <span>{error}</span>
      </div>
      }
      <div className='get-started-sign-up'>
        <Button onClick={onRegisterClick}>{t('getStartedButton')}</Button>
      </div>
    </s.Container>
  )
}

export default TabContent
