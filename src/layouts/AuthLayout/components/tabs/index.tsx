import React, { FC, MouseEvent } from 'react'
import * as s from './styled'
import { getTargetDataValue } from '../../utils/get-target-data-value'

export type TabItem = {
  label: string
  value: string
}

interface Props {
  active: number
  items: TabItem[]
  onTabClick: (tab: string) => void
}

const Tabs: FC<Props> = ({ active, items, onTabClick }) => {
  function renderTab({ label, value }: TabItem, index: number) {
    return (
      <s.Tab active={active === index} data-value={value}>
        {label}
      </s.Tab>
    )
  }

  function onTabsClickHandler(e: MouseEvent<HTMLDivElement>) {
    const value = getTargetDataValue(e, 'value')
    value && onTabClick(value)
  }

  return (
    <s.Container
      elementsCount={items.length}
      activeIndex={active}
      onClick={onTabsClickHandler}
    >
      {items.map(renderTab)}
    </s.Container>
  )
}

export default Tabs
