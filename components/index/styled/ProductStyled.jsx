import styled from "styled-components";

export const ProductStyle = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 5.75rem;
    padding: 0;
    list-style: none;
  }

  li {
    background: var(--bg-grey);
    text-align: center;
    border-radius: 0.5rem;
    position: relative;
    flex: 1;
    cursor: pointer;
  }

  li:not(:first-child) {
    margin-top: 4rem;
  }

  .container {
    padding-top: 5.5rem;
    padding-bottom: 1.375rem;
  }

  .img {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -38%);
    width: 8.625rem;
    filter: drop-shadow(0 15px 10px rgba(0, 0, 0, 0.5));
  }

  h2 {
    font-size: 0.9375rem;
    line-height: 1.33;
    margin-top: 0;
    margin-bottom: 1rem;
    letter-spacing: 0.0669em;
  }

  h2,
  p {
    font-weight: 700;
    text-transform: uppercase;
  }

  .learn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    line-height: 1.66;
    font-size: 0.8125rem;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 0.8rem;
    margin-block: 0;
  }

  @media screen and (min-width: 641px) {
    ul {
      flex-direction: row;
      gap: 1rem;
    }

    li:not(:first-child) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 1008px) {
  }
`;
