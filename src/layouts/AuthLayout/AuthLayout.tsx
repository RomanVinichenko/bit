import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import '../../scss/variables.scss'
import api from '../../api'
import { TokenProvider } from "./utils/token"

const AuthLayout = () => {
    const params = useParams()
    const location = useLocation()
    const [check, setCheck] = useState(true)
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    useEffect(() => {
        if(check){
            api.get('/api/v1/authorized').then(res => {
                if(res.data.authorized == true){
                  navigate(`/${params.lang ? params.lang : 'en'}/dashboard`)
                }else{
                    api.post('/api/v1/refresh/token', {refresh_token: TokenProvider.getRefreshToken()}).then(res => {
                        TokenProvider.setAccessToken(res.data.access_token)
                        TokenProvider.setRefreshToken(res.data.refresh_token)
                    })
                }
            })
        }   
      }, [check, navigate, params.lang])

    useEffect(() => {
        if(!params.lang){
            navigate(`/en`)
        }
        i18n.changeLanguage(params.lang)
    }, [i18n, params.lang])

    return (
        <Outlet  />
    )
}

export default AuthLayout