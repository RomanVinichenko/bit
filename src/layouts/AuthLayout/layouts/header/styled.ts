import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  max-width: 1480px;
  margin: auto;

  @media (max-width: 1600px) {
    padding: 20px;
  }

  @media (max-width: 1600px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 20px 20px;
  }

  .content--desktop {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .label {
    margin-right: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  button.language {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-left: 45px;
    cursor: pointer;
    color: var(--color);
    transition: filter 0.25s ease-out;

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1px var(--color-active));
    }

    &:active {
      filter: drop-shadow(0 0 4px var(--color-active));
    }
  }

  .content--mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
`

export { Container }
