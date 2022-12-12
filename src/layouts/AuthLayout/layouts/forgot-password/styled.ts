import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  gap: 50px;

  @media (max-width: 640px) or (max-height: 768px) {
    gap: 25px;
  }

  .field-wrapper {
    .input-label {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 15px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

  .field {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1340px) {
      display: grid;
      gap: 25px;
    }

    & > div:first-child {
      max-width: 350px;
      margin-right: 15px;
    }

    button {
      align-self: flex-end;
    }
  }

  .field--col {
    display: grid;
    gap: 50px;

    @media (max-width: 1280px) or (max-height: 768px) {
      gap: 25px;
    }
  }
`

export { Container }
