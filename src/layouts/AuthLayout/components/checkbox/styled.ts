import styled from 'styled-components'

const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  .label {
    margin-left: 15px;
    color: black;

    @media (max-width: 560px) {
      font-size: 14px;
      line-height: 17px;
    }
  }

  .input-box {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    border-radius: var(--button-radius);
    border: 2px solid var(--placeholder-color);
    transition: var(--transition-colors);
  }

  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    transform: scale(0);
    transition: transform 0.25s ease-out;
  }

  input {
    position: absolute;
    visibility: hidden;

    &:checked + .input-box {
      border-color: var(--color-active);

      .icon-box {
        transform: scale(1);
      }
    }
  }
`

export { Container }
