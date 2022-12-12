import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  height: 100%;

  background: var(--background);
  box-shadow: -3px 3px 5px rgba(51, 57, 70, 0.04);

  .header {
    padding: 10px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      color: var(--color-active);
    }

    button {
      display: flex;
      cursor: pointer;
    }
  }

  section {
    margin: 15px 0;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
  }

  .item {
    padding: 15px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    transition: var(--transition-colors);
    cursor: pointer;

    &:hover {
      color: var(--color-active--hover);
    }

    &.active {
      color: var(--color-active);
    }
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0;
  }

  .options__lang {
    cursor: pointer;
    color: var(--placeholder-color);
    transition: var(--transition-colors);

    &:hover {
      color: var(--color);
    }
  }

  .options__currency {
    cursor: pointer;
    color: var(--placeholder-color);
    transition: var(--transition-colors);

    &:hover {
      color: var(--color);
    }
  }
`

export { Container }
