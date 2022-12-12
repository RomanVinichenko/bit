import React, { FC, useState } from 'react'
import { FormWrapper } from '../../styled'
import Tabs, { TabItem } from '../../components/tabs'
import TabContent from './tab-content'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
  state?: any,
  setState?: any,
  comingValue: string,
  comingValue2: string,
}

const SignUp: FC<Props> = ({ state,setState,comingValue,comingValue2}) => {
  const {lang} = useParams()
  const {t} = useTranslation()
  const tabs: TabItem[] = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
  ]

  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0])

  const onTabClick = (value: string): void => {
    const tab = tabs.find((tab) => value === tab.value)
    tab && setActiveTab(tab)
  }

  return (
    <FormWrapper>
      <div className="form-title">{t('signUp')}</div>
      <Tabs
        active={tabs.findIndex((t) => t.value === activeTab.value)}
        items={tabs}
        onTabClick={onTabClick}
      />
      <TabContent comingValue2={comingValue2} comingValue={comingValue} state={state} setState={setState} tab={activeTab.value as 'email' | 'phone'} />
      <div className="footer-button footer-button--mobile">
        {t('alreadyMember')}
        <Link to={`/${lang}/signin`}>Log In</Link>
      </div>
    </FormWrapper>
  )
}

export default SignUp
