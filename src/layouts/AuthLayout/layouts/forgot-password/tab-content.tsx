import React, { FC, ReactNode } from 'react'
import { Input, Button } from '../../components'
import * as s from './styled'

interface Props {
  tab: 'email' | 'phone'
}

const TabContent: FC<Props> = ({ tab }) => {
  function renderInputLabel(): string {
    switch (tab) {
      case 'phone':
        return 'Phone'
      case 'email':
        return 'Email'
    }
  }

  function renderLoginInput(): ReactNode {
    switch (tab) {
      case 'phone':
        return (
          <Input
            name="phone"
            type="text"
            placeholder="Enter your phone number"
          />
        )
      case 'email':
        return (
          <Input name="email" type="email" placeholder="Enter email address" />
        )
    }
  }

  return (
    <s.Container>
      <div className="field-wrapper">
        <div className="input-label">{renderInputLabel()}</div>
        <div className="field">
          {renderLoginInput()}
          <Button>Send Code</Button>
        </div>
      </div>

      <div className="field field--col">
        <Input name="verification code" type="text" label="Verification code" />
        <Button>Submit Code</Button>
      </div>
    </s.Container>
  )
}

export default TabContent
