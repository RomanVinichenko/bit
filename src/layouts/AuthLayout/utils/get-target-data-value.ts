import { MouseEvent, ChangeEvent } from 'react'

function getTargetDataValue(
  e: MouseEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>,
  key: string
): string | undefined {
  const selector = `[data-${key}]`
  return ((e.target as Element)?.closest(selector) as HTMLElement)?.dataset[key]
}

export { getTargetDataValue }
