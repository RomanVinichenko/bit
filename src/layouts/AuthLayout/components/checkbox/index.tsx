import React, { FC, ReactNode } from 'react'
import { IconChecked } from '../../../../icons'
import * as s from './styled'

interface Props {
  label?: ReactNode,
  checked?: boolean,
  setChecked?: any,
}

const Checkbox: FC<Props> = ({ label, checked,setChecked, ...otherProps }) => {
  function renderLabel() {
    if (label) {
      return <div className="label">{label}</div>
    }
  }

  return (
    <s.Container>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} checked={checked} {...otherProps} />
      <div className="input-box">
        <div className="icon-box">
          <IconChecked />
        </div>
      </div>
      {renderLabel()}
    </s.Container>
  )
}

export default Checkbox
