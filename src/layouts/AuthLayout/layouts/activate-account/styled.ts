import styled from 'styled-components'

const Container = styled.div`
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-secondary);
  }
  .auth-error{
    padding: 15px;
    background-color: red;
    border-radius: 8px;
    margin-bottom: 15px;
    color: white;
    width: 200px;
    display: flex;
    justify-content: center;

    span{
      color:white !important;
    }
  }

  button.send-again {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-active);
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--color-active--hover);
    }

    &:active {
      color: var(--color-active--active);
    }
  }

  button.code-problems {
    width: max-content;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: var(--color-secondary);
    transition: var(--transition-colors);
    cursor: pointer;

    &:hover,
    &:focus {
      color: #0052FF;
    }

    &:active {
      color: #0052FF;
    }
  }
`

export { Container }
