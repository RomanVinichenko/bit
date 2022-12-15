import React, { FC, useEffect, useState } from 'react'
import { FormWrapper } from '../../styled'
import { Button, Input } from '../../components'
import * as s from './styled'
import api from 'api'
import { useNavigate, useParams } from 'react-router-dom'
import { TokenProvider } from '../../utils/token'
import { useTranslation } from 'react-i18next'

interface Props{
  state?: any, 
}

const ActivateAccount: FC<Props> = ({ state }) => {
  const [error, setError] = useState('')
  const [code, setCode] = useState('')
  const [test, setTest] = useState(false)
  const [validation, setValidation] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  const {t} = useTranslation()

  useEffect(() => {
    if(state.type == ''){
      navigate(`/${params.lang}/signup`)
    }
  }, [navigate, params.lang, state.type])

  const sendAgain = () => {
    
    if(state.type == 'email' && state.email != ''){
      api.post('/api/v1/signup/email/code/send', {email: state.email}).then(res => {

      }).catch(response => {
        setError(response.response.data.error)
      })
    }else if(state.type == 'phone' && state.phone != ''){
      api.post('/api/v1/signup/phone/code/send', {phone: state.phone}).then(res => {

      }).catch(response => {
        setError(response.response.data.error)
      })
    }
  }

  const onCodeSubmit = () => {
    setValidation(true)
    if(code.length != 6){
      setError('Code length must be 6')
      setValidation(false)
      }
    if(state.type == 'email' &&  state.email !== '' &&  validation == true){
      if(state.refferal != ''){
        api.post('/api/v1/signup/step/2', {type: state.type, email: state.email, password: state.password,agree: state.agree,code: code, refcode: state.refferal}).then(response => {
          TokenProvider.setAccessToken(response.data.access_token);
          TokenProvider.setRefreshToken(response.data.refresh_token);
          navigate(`/${params.lang}${response.data.redirect}`)
        }).catch(res => {
          setError(res.response.data.error)
        })
      }else{
        api.post('/api/v1/signup/step/2', {type: state.type, email: state.email, password: state.password,agree: state.agree,code: code}).then(response => {
          TokenProvider.setAccessToken(response.data.access_token);
          TokenProvider.setRefreshToken(response.data.refresh_token);
          navigate(`/${params.lang}${response.data.redirect}`)
        }).catch(res => {
          setError(res.response.data.error)
        })
      }
    }else if(state.type == 'phone' && state.phone !== '' && validation == true){
      if(state.refferal != ''){
        api.post('/api/v1/signup/step/2', {type: state.type, phone: state.phone, password: state.password,agree: state.agree,code: code, refcode: state.refferal}).then(response => {
          TokenProvider.setAccessToken(response.data.access_token);
          TokenProvider.setRefreshToken(response.data.refresh_token);
          navigate(`/${params.lang}${response.data.redirect}`)
        }).catch(res => {
          setError(res.response.data.error)
        })
      }else{
        api.post('/api/v1/signup/step/2', {type: state.type, phone: state.phone, password: state.password,agree: state.agree,code: code}).then(response => {
          TokenProvider.setAccessToken(response.data.access_token);
          TokenProvider.setRefreshToken(response.data.refresh_token);
          navigate(`/${params.lang}${response.data.redirect}`)
        }).catch(res => {
          setError(res.response.data.error)
        })
      }
    }
  }

  return (
    <s.Container>
      <FormWrapper>
        <div className="form-title">{t('activateAccount')}</div>
        <div className="description">
          A 6-digit confirmation code has been sent to {state?.type == 'email' ? state?.email : state?.phone} Enter
          the verification code to activate your account.
        </div>
        <div className="fields">
          <Input
            name="activate account"
            type="number"
            value={code}
            setValue={setCode}
            label={t('confirmationCode')}
            after={<button onClick={sendAgain} className="send-again">{t('sendAgain')}</button>}
            style={{ paddingRight: 100 }}
          />
        </div>
        {error != '' && 
          <div className='auth-error'>
            <span>{error}</span>
          </div>
        }
        <Button onClick={onCodeSubmit}>{t('submitCode')}</Button>
        <button className="code-problems">{`${t('didntRecieved')}`}</button>
      </FormWrapper>
    </s.Container>
  )
}

export default ActivateAccount
