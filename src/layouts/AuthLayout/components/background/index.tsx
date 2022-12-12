import React, { FC } from 'react'
import { IconDecorationNetBig, IconDecorationNetSmall } from '../../../../icons'
import cubic1 from '../../../../img/home/cubic1.png'
import cubic2 from '../../../../img/home/cubic2.png'
import cubic3 from '../../../../img/home/cubic3.png'
import * as s from './styled'

const Background: FC = () => {
  return (
    <s.Container>
      <img src={cubic1} className='cubic1-background' />
      <img src={cubic2} className='cubic2-background' />
      <img src={cubic3} className='cubic3-background' />
    </s.Container>
  )
}

export default Background
