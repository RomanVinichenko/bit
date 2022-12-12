import React, {
  createRef,
  FC,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from 'react'
import { IconDropdownArrow } from '../../../../icons'
import { useWindowSize } from '../../hooks'
import * as s from './styled'

interface Props {
  label: ReactNode
  children: ReactNode
  defaultHeight?: number
}

const Dropdown: FC<Props> = ({ label, children, defaultHeight = 0 }) => {
  const [opened, setOpened] = useState(false)

  const [width, height] = useWindowSize()
  const [scrollHeight, setScrollHeight] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)

  const toggleOpened = () => {
    setOpened((prev) => !prev)
  }

  const ref: RefObject<HTMLDivElement> = createRef()

  useEffect(() => {
    if (opened && scrollHeight) {
      setMaxHeight(scrollHeight)
    } else {
      setMaxHeight(defaultHeight)
    }
  }, [scrollHeight, opened])

  useEffect(() => {
    const refSC = ref.current?.scrollHeight
    const h = getScrollHeight(refSC)
    setScrollHeight(h)
  }, [ref.current, width, height])

  function getScrollHeight(h: number | undefined): number {
    return h || defaultHeight
  }

  function renderLabel() {
    return (
      <button className="label" onClick={toggleOpened}>
        {label}
        <div className="icon">
          <IconDropdownArrow />
        </div>
      </button>
    )
  }

  return (
    <s.Container opened={opened}>
      {renderLabel()}
      <s.Content ref={ref} maxHeight={maxHeight}>
        {children}
      </s.Content>
    </s.Container>
  )
}

export default Dropdown
