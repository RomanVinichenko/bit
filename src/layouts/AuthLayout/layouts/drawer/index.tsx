import React, { FC, ReactNode, useEffect } from 'react'
import { useClickOutside } from '../../hooks'
import * as s from './styled'

interface Props {
  opened: boolean
  closeHandler: () => void
  contentPosition?: 'right' | 'left'
  children: ReactNode
}

const Drawer: FC<Props> = ({
  opened,
  children,
  closeHandler,
  contentPosition = 'right',
}) => {
  function toggleBodyStyles(close?: boolean) {
    if (opened && !close) {
      document.body.style.maxHeight = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.maxHeight = 'none'
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    toggleBodyStyles()

    return () => toggleBodyStyles(true)
  }, [opened])

  const cn =
    contentPosition === 'left'
      ? 'drawer-content drawer-content--left'
      : 'drawer-content'

  const wrapperRef = React.createRef<HTMLDivElement>()
  useClickOutside(wrapperRef, () => {
    closeHandler()
  })

  return (
    <s.Container opened={opened}>
      <div ref={wrapperRef} className={cn}>
        {children}
      </div>
    </s.Container>
  )
}

export default Drawer
