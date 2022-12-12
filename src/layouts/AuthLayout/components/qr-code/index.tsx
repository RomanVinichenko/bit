import React, { FC } from 'react'
import * as s from './styled'

const QrCode: FC<{ url: string; hideDescription?: boolean }> = ({
  url,
  hideDescription,
}) => {
  function renderDescription() {
    if (!hideDescription) {
      return (
        <div className="description">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_68_1303)">
              <path
                d="M10 6.50024V9.50024H7V6.50024H10ZM11.5 5.00024H5.5V11.0002H11.5V5.00024ZM10 14.5002V17.5002H7V14.5002H10ZM11.5 13.0002H5.5V19.0002H11.5V13.0002ZM18 6.50024V9.50024H15V6.50024H18ZM19.5 5.00024H13.5V11.0002H19.5V5.00024ZM13.5 13.0002H15V14.5002H13.5V13.0002ZM15 14.5002H16.5V16.0002H15V14.5002ZM16.5 13.0002H18V14.5002H16.5V13.0002ZM13.5 16.0002H15V17.5002H13.5V16.0002ZM15 17.5002H16.5V19.0002H15V17.5002ZM16.5 16.0002H18V17.5002H16.5V16.0002ZM18 14.5002H19.5V16.0002H18V14.5002ZM18 17.5002H19.5V19.0002H18V17.5002ZM22.5 7.00024H20.5V4.00024H17.5V2.00024H22.5V7.00024ZM22.5 22.0002V17.0002H20.5V20.0002H17.5V22.0002H22.5ZM2.5 22.0002H7.5V20.0002H4.5V17.0002H2.5V22.0002ZM2.5 2.00024V7.00024H4.5V4.00024H7.5V2.00024H2.5Z"
                fill="#0080FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_68_1303">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.000244141)"
                />
              </clipPath>
            </defs>
          </svg>
          Open the Bityx app and scan the QR code to login
        </div>
      )
    }
  }

  return (
    <s.Container>
      <s.Box>
        <img src={url} alt="qr-code" />
        <div className="border border--top-left"></div>
        <div className="border border--top-right"></div>
        <div className="border border--bottom-left"></div>
        <div className="border border--bottom-right"></div>
      </s.Box>
      {renderDescription()}
    </s.Container>
  )
}

export default QrCode
