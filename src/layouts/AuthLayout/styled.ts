import styled from 'styled-components'

const Container = styled.div`
  display: block;
  background-color: white;
  height: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  .fields {
    display: grid;
    gap: 50px;

    @media (max-width: 1280px) {
      gap: 35px;
    }

    @media (max-height: 768px) {
      gap: 35px;
    }
  }
`

const Content = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  padding: 60px 20px 190px 20px;
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FormWrapper = styled.div`
  display: grid;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  gap: 50px;
  width: 100%;
  margin-left: auto;
  max-width: 722px;
  z-index: 1;
  border-radius: 12px;
  padding: 50px 50px 100px 50px;
  background-color: white;
  box-shadow: 0 20px 40px rgb(0 0 0 / 50%);

  @media (max-width: 768px) {
    gap: 35px;
    padding: 25px 15px 50px 15px;
    width: 335px;
  }

  @media (max-height: 768px) {
    gap: 35px;
    padding: 30px;
  }

  @media (max-height: 900px) {
    gap: 35px;
    padding: 30px;
  }
  
  .form-title {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0;
    color: #0052FF;

    @media (max-width: 768px) or (max-height: 700px) {
      font-size: 24px;
      line-height: 29px;
    }
  }

  .footer-button {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    a {
      color: black;
      text-decoration: none !important;
    }
  }

  .footer-button--mobile {
    a {
      margin-left: 25px;
      color: var(--color-active);
    }
  }

  .footer-button--small {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #55617;
    text-decoration: none !important;

    @media (min-width: 769px) {
      margin-top: -25px;
    }
  }
`

const GreetingBox = styled.div`
  margin-right: 35px;
  padding-top: 129px;

  .title {
    max-width: 663px;
    width: 100%;
    font-family: "DM Sans-Medium", sans-serif;
    margin-bottom: 24px;
    font-size: 64px;
    font-weight: 500;
    line-height: 1.3;
    color: #0A0B0D;

    @media (max-width: 1480px) {
      font-size: 46px;
    }

    @media (max-width: 1280px) {
      font-size: 38px;
      line-height: 44px;
    }

    @media (max-width: 1024px) {
      font-size: 30px;
      line-height: 36px;
    }

    @media (max-width: 960px) {
      text-align: center;
    }
  }

  .description {
    max-width: 564px;
    width: 100%;
    font-family: "DM Sans-Medium", sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    color: #5B616E;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 19px;
    }

    @media (max-width: 960px) {
      text-align: center;
    }
  }
`

export {Container, Content, GreetingBox, FormWrapper}
