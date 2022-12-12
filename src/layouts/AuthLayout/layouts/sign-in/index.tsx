import React, { FC, useState } from 'react'
import { FormWrapper } from '../../styled'
import Tabs, { TabItem } from '../../components/tabs'
import TabContent from './tab-content'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface Props {
  state?: any,
  setState?: any,
}

export enum SignInTabs {
  email = 'email',
  phone = 'phone',
  qr = 'qr',
}

const SignIn: FC<Props> = ({ state, setState }) => {
  const params = useParams()
  const {t} = useTranslation()
  const tabs: TabItem[] = [
    { label: 'Email', value: SignInTabs.email },
    { label: 'Phone', value: SignInTabs.phone },
    { label: 'QR Code', value: SignInTabs.qr },
  ]

  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0])

  const onTabClick = (value: string): void => {
    const tab = tabs.find((tab) => value === tab.value)
    tab && setActiveTab(tab)
  }

  return (
    <FormWrapper>
      <div className="form-title">{t('signIn')}</div>
      <Tabs
        active={tabs.findIndex((t) => t.value === activeTab.value)}
        items={tabs}
        onTabClick={onTabClick}
      />
      <TabContent tab={activeTab.value as SignInTabs} />
      {activeTab.value !== SignInTabs.qr && (
        <div className="footer-button footer-button--small">
          <Link to={`/${params.lang}/forgotPassword`}>{t('forgotPassword')}</Link>
        </div>
      )}
    </FormWrapper>
  )
}

export default SignIn
