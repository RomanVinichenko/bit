import styled, { css } from 'styled-components'

const Content = styled.div<{ maxHeight: number }>`
  padding-top: 0;
  max-height: ${({ maxHeight }) => maxHeight + 'px'};
  opacity: 0;
  pointer-events: none;
  transition-property: padding-top, max-height, opacity;
  transition-timing-function: ease-in;
  transition-duration: 200ms;
`

const Container = styled.div<{ opened: boolean }>`
  .label {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    color: black;

    svg {
      color: #556176;
      transition: var(--transition-colors);
    }

    &:hover {
      svg {
        color: var(--color);
      }
    }
  }

  .icon {
    display: flex;
    margin-left: 5px;
    transform: rotate(0deg);
    transition: transform 0.25s ease-out;
  }

  ${({ opened }) =>
    opened &&
    css`
      .icon {
        transform: rotate(-180deg);
      }
      ${Content} {
        padding-top: 5px;
        opacity: 1;
        pointer-events: auto;
      }
    `}
`

export { Container, Content }
