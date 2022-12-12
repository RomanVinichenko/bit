import React, { FC, useState } from 'react'
import { FormWrapper } from '../../styled'
import Tabs, { TabItem } from '../../components/tabs'
import TabContent from './tab-content'

const ForgotPassword: FC = () => {
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
      <div className="form-title">Forgot your password?</div>
      <Tabs
        active={tabs.findIndex((t) => t.value === activeTab.value)}
        items={tabs}
        onTabClick={onTabClick}
      />
      <TabContent tab={activeTab.value as 'email' | 'phone'} />
    </FormWrapper>
  )
}

export default ForgotPassword
