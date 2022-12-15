import styled from 'styled-components'

const Container = styled.div`
  display: block;
  .get-started-sign-up{
    margin-top:50px;
  }

  @media(max-width:768px){
    width:277px;
  }
  .fields{
    max-width:100%;
  }
  .terms-flex{
    @media(max-width:768px){
      display:flex;
      flex-direction:column;
      text-align: start;
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
  .terms-flex{
    @media (max-width:768px){
      displfay:flex;
      flex-direction:column;
      text-align:start;
      margin-left:-9px;
    }
  }
  .auth-error{
    padding: 15px;
    background-color: red;
    border-radius: 8px;
    margin-bottom: 15px;
    width: 200px;
    color: white;
    display: flex;
    justify-content: center;

    span{
      color:white !important;
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
    color: black;

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

    @media (max-height: 700px) {
      .label {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`
export { Container }
