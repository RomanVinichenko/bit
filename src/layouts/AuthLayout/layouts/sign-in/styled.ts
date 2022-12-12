import styled from 'styled-components'

const Container = styled.div`
  display: block;

  .get-started-sign-in{
    margin-top: 50px;
  }
  .terms-flex{
    @media (max-width:768px){
      display:flex;
      flex-direction:column;
      text-align:start;
    }
  }
  @media(max-width:768px){
    width:277px;
  }
  .qr-wrapper {
    display: flex;
    justify-content: center;
  }
  .auth-error{
    padding: 15px;
    background-color: red;
    border-radius: 8px;
    margin-bottom: 15px;
    width: 200px;
    color: white !important;
    display: flex;
    margin-top:10px;
    justify-content: center;

    span{
      color:white !important;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-active);

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  .terms-box {
    margin-top: 50px;
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    @media (max-width: 1280px) {
      margin-top: 25px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }

    a {
      white-space: nowrap;
    }
  }

  .footer-button {
    margin-top: 25px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    a {
      color: black;
      margin-left: 25px;
      color: #55617 !important;
      text-decoration:none !important;
    }
    
  }

  .footer-button--mobile {
    @media (min-width: 769px) {
      display: none;
    }
  }
`

export { Container }
