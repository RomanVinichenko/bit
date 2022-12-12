import React, { FC } from 'react'
import * as s from './styled'
import * as layouts from '../../layouts'

type Props = {
  opened: boolean
  onCloseBtnClick(): void
}

const MobileMenu: FC<Props> = ({ opened, onCloseBtnClick }) => {
  return (
    <layouts.Drawer opened={opened} closeHandler={onCloseBtnClick}>
      <s.Container>
        <div className="header">
          <div className="title">Sign In</div>
          <button onClick={onCloseBtnClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_191_4246)">
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_191_4246">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <section>
          <div className="item active">Exchange</div>
          <div className="item">Markets</div>
          <div className="item">Buy Crypto</div>
          <div className="item">Support</div>
          <div className="item">Rewards Center</div>
          <div className="item">Protection Fund</div>
          <div className="item">Institutional</div>
        </section>
        <div className="options">
          <button className="options__lang">English</button>
          <button className="options__currency">USD</button>
        </div>
      </s.Container>
    </layouts.Drawer>
  )
}

export default MobileMenu
