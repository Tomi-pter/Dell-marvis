import styled from "styled-components";

export const FooterStyle = styled.footer`
  margin-top: 7.5rem;
  background: var(--bg-black);
  text-align: center;

  .container {
    width: 100%;
    padding-top: 3.25rem;
    padding-bottom: 2rem;
    position: relative;
  }

  .container::before {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 6.25rem;
    background: var(--text-orange);
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  ul {
    margin-top: 3rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    color: white;
    text-transform: uppercase;
  }

  li:not(:first-child) {
    margin-top: 1rem;
  }

  .text {
    display: grid;
    grid-gap: 3rem;
    margin-top: 3rem;
  }

  @media screen and (min-width: 641px) {
    .container {
      padding: 3.75rem 1.5rem 2rem;
    }
    .container::before {
      left: 1.5rem;
      transform: translateX(0);
    }
    nav {
      flex-direction: row;
    }
    ul {
      margin: 0;
      flex-direction: row;
    }
    li:not(:first-child) {
      margin: 0 0 0 2rem;
    }
  }

  @media screen and (min-width: 1008px) {
  }
`;
