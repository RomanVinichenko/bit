import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 42px;

  .description {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-top: 50px;

    @media (max-width: 500px) {
      flex-direction: column;
      text-align: center;
      max-width: 215px;

      svg {
        margin-bottom: 5px;
        margin-right: 0;
      }
    }

    svg {
      margin-right: 15px;
    }
  }
`

const Box = styled.div`
  position: relative;
  padding: 25px;
  width: 200px;
  height: 200px;
  background-color: none;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  .border {
    position: absolute;
    border: 1px solid var(--color-active);
    width: 20px;
    height: 20px;
  }

  .border--top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .border--top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }

  .border--bottom-left {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }

  .border--bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
`

export { Container, Box }
