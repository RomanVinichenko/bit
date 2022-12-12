import styled from 'styled-components'

const Container = styled.div`
max-width: 76%;
margin: 0 auto;
position: relative;

  .cubic1-background{
    position: absolute;
    bottom: 0px;
    top: 95px;
    right: 80px;
    left: -146px;
    @media (max-width:700px){
      left: -160px;
    }
  }
  .cubic2-background{
    position: absolute;
    bottom: 0px;
    top: 300px;
    z-index: 0;
    left: 100%;
    @media (max-width:1336px){
      display:none;
    }
  }
  .cubic3-background{
    position: absolute;
    bottom: 0px;
    top: 631px;
    z-index: 0;
    right: 80px;
    left: 45.5%;
    @media (max-width:960px){
      position: absolute;
      bottom: 0px;
      top: 678px;
      z-index: 0;
      right: 80px;
      left: -18.5%;
    }
    @media (max-width:700px){
      left: -32.5%;
    }
  }

`

export { Container }
