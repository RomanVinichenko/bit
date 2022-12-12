import React, { FC } from 'react'
import { IconLogo, IconLogoIcon } from '../../../../icons'
import * as s from './styled'

const Logo: FC = () => {
  return (
    <s.Container>
      <div className="logo-desktop">
        <IconLogo />
      </div>
      <div className="logo-mobile">
        <IconLogoIcon />
      </div>
    </s.Container>
  )
}

export default Logo
