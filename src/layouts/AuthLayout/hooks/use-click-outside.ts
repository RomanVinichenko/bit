import * as React from 'react'

/**
 * The hook add handler when click outside of element
 * @param {any} ref
 * @param {void} handler
 * @return {void}
 */
export default function useClickOutside(ref: any, handler: () => void) {
  function checkModalShouldStayOpened(event: any): Boolean {
    return !ref.current || ref.current.contains(event.target)
  }

  React.useEffect(() => {
    const listener = (e: any) => {
      if (checkModalShouldStayOpened(e)) {
        return
      }

      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
