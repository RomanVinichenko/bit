import React, { FC, InputHTMLAttributes, ReactNode, useState } from 'react'
import IconPasswordShow from './icon-password-show'
import IconPasswordHide from './icon-password-hide'
import * as s from './styled'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  after?: ReactNode
  value?: string,
  setValue?: any,
}

const Input: FC<Props> = ({ label, type, after,value,setValue, ...otherProps }) => {
  const [inputType, setInputType] = useState(type)

  function renderLabel() {
    if (label) {
      return <div className="input-label">{label}</div>
    }
  }

  function renderAfter(): ReactNode | undefined {
    if (after) {
      return <div className="after">{after}</div>
    }

    if (type === 'password') {
      switch (inputType) {
        case 'text':
          return (
            <button className="after" onClick={() => setInputType('password')}>
              <IconPasswordHide />
            </button>
          )
        case 'password':
          return (
            <button className="after" onClick={() => setInputType('text')}>
              <IconPasswordShow />
            </button>
          )
      }
    }
  }

  return (
    <s.Container>
      {renderLabel()}
      <div className="input-box">
        <s.Input {...otherProps} value={value} onChange={(e) => setValue(e.target.value)} type={inputType} />
        {renderAfter()}
      </div>
    </s.Container>
  )
}

export default Input
