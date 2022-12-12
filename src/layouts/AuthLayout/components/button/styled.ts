import styled from 'styled-components'

const Button = styled.button`
  transition: 0.7s;
  padding: 13px 40px;
  gap: 10px;
  background: var(--color-active);
  border: 1px solid #0052FF;
  color: #fff;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  width: max-content;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: 0.7s;
    background-color: white;
    color: #0052FF;
  }

  &:active {
    background-color: var(--color-active--active);
  }
`

export { Button }
