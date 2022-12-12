import styled from 'styled-components'

const Container = styled.div`
  .logo-mobile {
    display: none;
  }

  @media (max-width: 1600px) {
  }

  @media (max-width: 768px) {
    .logo-desktop {
      display: none;
    }

    .logo-mobile {
      display: block;
    }
  }

  div {
  }
`

export { Container }
