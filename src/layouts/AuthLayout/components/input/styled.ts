import styled from 'styled-components'

const Container = styled.div`
  width:335px;

  @media (max-width:768px){
    width: 100%;
  }

  .input-box {
    position: relative;

    .after {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      right: 0;
      top: 0;
      bottom: 0;
      margin-right: 15px;

      svg {
        cursor: pointer;
      }
    }
  }

  .input-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 15px;

    @media (max-width: 768px) or (max-height: 700px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  background: transperent;
  border: 1px solid #C0CBDD;
  border-radius: 4px;
  color: black;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  outline: none;
  transition: var(--transition-colors);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  &:hover,
  &:active {
    background-color: transperent;
  }

  &:focus {
    border-color: var(--color-active);
  }

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--placeholder-color);
  }
`

export { Container, Input }
