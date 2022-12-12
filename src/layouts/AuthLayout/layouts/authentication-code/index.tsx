import React, { FC, useEffect, useState } from 'react'
import { FormWrapper } from '../../styled'
import { Button, Input } from '../../components'
import * as s from './styled'
import api from 'api'
import { TokenProvider } from '../../utils/token'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


interface Props {
  state?: any,
  setState?: any,
}

const AuthenticationCode: FC<Props> = ({ state, setState }) => {
  const [authCode, setAuthCode] = useState('')
  const [error, setError] = useState('')
  const [test, setTest] = useState(false)
  const [validation, setValidation] = useState(true)
  const navigate = useNavigate()
  const params = useParams()
  const { t } = useTranslation()

  useEffect(() => {
     
    if (state.type == '') {
      navigate(`/${params.lang}/signin`)
    }
  }, [navigate, params.lang, state.type])

  const onSubmitCode = () => {
    setValidation(true)
    if (authCode.length != 6) {
      setError('Code length must be 6')
      setValidation(false)
    }
    if (state.type == 'email' && state.email !== '' && validation == true) {
      api.post('/api/v1/signin/step/2', { type: state.type, email: state.email, password: state.password, auth_code: authCode }).then(res => {
        TokenProvider.setAccessToken(res.data.access_token);
        TokenProvider.setRefreshToken(res.data.refresh_token);
        navigate(`/${params.lang}${res.data.redirect}`)
      })
    } else if (state.type == 'phone' && state.phone !== '' && validation == true) {
      api.post('/api/v1/signin/step/2', { type: state.type, phone: state.phone, password: state.password, auth_code: authCode }).then(res => {
        TokenProvider.setAccessToken(res.data.access_token);
        TokenProvider.setRefreshToken(res.data.refresh_token);
        navigate(`/${params.lang}${res.data.redirect}`)
      })
    }
  }

  return (
    <s.Container>
      <FormWrapper>
        <div className="form-title">{t("authenticationCode")}</div>
        <div className="description">
          {t('enterPhoneCode')}
        </div>
        <div className="fields">
          <Input
            name="authentication code"
            type="number"
            label={t("authenticationCode")}
            value={authCode}
            setValue={setAuthCode}
            after={<button className="send-again">{t('sendAgain')}</button>}
            style={{ paddingRight: 100 }}
          />
        </div>
        {error != '' &&
          <div className='auth-error'>
            <span>{error}</span>
          </div>
        }
        <Button onClick={onSubmitCode}>{t('submitCode')}</Button>
        <button className="code-problems">{`${t('didntRecieved')}`}</button>
      </FormWrapper>
    </s.Container>
  )
}

export default AuthenticationCode
