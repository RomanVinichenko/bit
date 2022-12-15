import styled, { css } from 'styled-components'

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: var(--color-secondary);
  cursor: pointer;
  transition: var(--transition-colors);

  @media (max-width: 768px) or (max-height: 700px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    color: black;
  }

  ${({ active }) =>
    active &&
    css`
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      
      color: #000000;
      
    `}
`

const Container = styled.div<{
  elementsCount: number
  activeIndex: number
}>`
  position: relative;
  display: flex;

  & > div {
    width: ${({ elementsCount }) => 100 / elementsCount + '%'};
  }

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 5px);
    height: 2px;
    background-color: #556176;
    border-radius: 4px;
  }

  &:before {
    transition: left 0.25s ease-out;
    width: ${({ elementsCount }) => 100 / elementsCount + '%'};
    left: ${({ elementsCount, activeIndex }) =>
      (100 / elementsCount) * activeIndex + '%'};
    background-color: var(--color-active);
    z-index: 1;
  }
`

export { Container, Tab }
