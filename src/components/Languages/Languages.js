import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import '../../scss/language.scss'

const Languages = () => {
    const [loading, setLoading] = useState(true)
    const [changableLangLoading, setChangableLangLoading] = useState(true)
    const [render, setRender] = useState(false)
    const [defaultLanguage, setDefaultLanguage] = useState(null)
    const [changeAbleLanguage, setChangeAbleLanguage] = useState(null)
    const [succsessMessage, setSuccsesMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [objectSuccsess, setObjectSuccsess] = useState('')
    const [ojbectError, setObjectError] = useState('')
    const [objectKey, setObjectKey] = useState('')
    const [objectValue, setObjectValue] = useState('')
    const params = useParams('/:lang')

    useEffect(() => {
        if(loading){
            axiosInstance.get('get-language/en').then(res => {
                setDefaultLanguage(res.data)
                console.log(defaultLanguage)
                setLoading(false)
            })
        }
    }, [loading, defaultLanguage])
    useEffect(() => {
        if(changableLangLoading){
            axiosInstance.get(`get-language/${params.lang}`).then(res => {
                console.log(res.data == '')
                if(Object.keys(res.data).length == 0 && defaultLanguage !== null){
                    setChangeAbleLanguage(defaultLanguage)
                    setChangableLangLoading(false)
                }else if(Object.keys(res.data).length > 0){
                    setChangeAbleLanguage(res.data)
                    setChangableLangLoading(false)
                    
                }
            }).catch(() => {
                if(defaultLanguage !== null){
                    setChangeAbleLanguage(defaultLanguage)
                    setChangableLangLoading(false)
                }
            })
        }
    }, [changableLangLoading, changeAbleLanguage, params.lang, defaultLanguage])
    useEffect(() => {
        if(render){
            setChangeAbleLanguage(prev => ({...prev,}))
            setRender(false)
        }
    }, [render])

    const changeValue = (event,element) => {
        setChangeAbleLanguage(prev => ({
            ...prev,
            [element]: event.target.value
        }))
        setRender(true)

    }

    const saveChanges = () => {
        axiosInstance.put(`change-language/${params.lang}`, changeAbleLanguage).then(res => {
            setSuccsesMessage(res.data)
        }).catch(response => {
            console.log(response)
            setErrorMessage(response.message)
        })
    }

    const addObject = () => {
        axiosInstance.post(`add-object`, {key: objectKey}).then(res => {
            setObjectSuccsess(res.data)
        }).catch(res => {
            setObjectError(res.message)
        })
    }


    return (
        <div className="container-parent">
            <div className="save-wrapper">
                <div className="save-content-flex">
                    <div className="save-button" onClick={saveChanges}>
                        Save
                    </div>
                    {succsessMessage !== '' && <div className="succsess-message"><span>{succsessMessage}</span></div>}
                    {errorMessage !== '' && <div className="error-message"><span>{errorMessage}</span></div>}
                </div>
                <div className="add-object-flex">
                    {objectSuccsess !== '' && <div className="succsess-message"><span>{objectSuccsess}</span></div>}
                    {ojbectError !== '' && <div className="error-message"><span>{ojbectError}</span></div>}
                    <div className="add-button" onClick={addObject}>
                        Add
                    </div>
                    <input value={objectKey} onChange={(e) => setObjectKey(e.target.value)} />
                </div>
            </div>
            <div className="languages-rows">
                <div className="languages-columns">
                    {defaultLanguage !== null && 
                        Object.keys(defaultLanguage).map((el, i) => (
                            <div className="language-dont-changable" key={i}>
                                <span className="languages-text">{defaultLanguage[el]} = </span>
                            </div>
                        ))
                    }
                </div>
                <div className="languages-columns">
                    {changeAbleLanguage !== null && 
                        Object.keys(changeAbleLanguage).map((el, i) => (
                            <div className="language-input-wrapper" key={i}>
                                <input className="language-input" value={changeAbleLanguage[el]} onChange={e => changeValue(e, el)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Languages;
