import React, { FC, ReactNode } from 'react'
import * as s from './styled'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<Props> = ({ children, ...otherProps }) => {
  return <s.Button {...otherProps}>{children}</s.Button>
}

export default Button
