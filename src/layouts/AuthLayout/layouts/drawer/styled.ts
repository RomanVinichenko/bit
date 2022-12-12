import styled, { css } from 'styled-components'

const Container = styled.div<{ opened: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  overflow-x: hidden;
  transition: opacity 0.3s ease-out;
  opacity: 0;
  z-index: 0;
  pointer-events: none;

  .drawer-content {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(410px);
    transition: transform 0.25s ease-out;
  }

  .drawer-content--left {
    right: auto;
    transform: translateX(-410px);
  }

  ${({ opened }) =>
    opened &&
    css`
      opacity: 1;
      z-index: 10;
      pointer-events: auto;

      .drawer-content {
        transform: translateX(0);
      }
    `}
`

export { Container }
