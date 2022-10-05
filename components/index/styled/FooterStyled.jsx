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
    transition: color 350ms;

    &:hover {
      color: var(--text-orange);
    }
  }

  li:not(:first-child) {
    margin-top: 1rem;
  }

  .text {
    color: white;
    display: grid;
    grid-gap: 3rem;
    margin-top: 3rem;
  }

  .location,
  .phone {
    h2,
    p,
    a {
      opacity: 0.5;
    }
  }

  .phone a:hover {
    opacity: 1;
  }

  .socials {
    display: flex;
    justify-content: center;

    svg {
      width: 30px;
      height: 30px;
      fill: white;
      margin: 0 0.5rem 0.5rem;
      transition: fill 350ms;

      &:hover {
        fill: var(--text-orange);
      }
    }
  }

  @media screen and (min-width: 641px) {
    .container {
      padding: 3.75rem 1.5rem;
    }
    .container::before {
      left: 1.5rem;
      transform: translateX(0);
    }
    nav {
      flex-direction: row;
      justify-content: space-between;
    }
    .logo {
      color: white;
    }
    ul {
      margin: 0;
      flex-direction: row;
      flex-wrap: wrap;
    }
    li:not(:first-child) {
      margin: 0 0 0 1.25rem;
    }
    .text {
      grid-template-columns: 1fr 1fr 1fr;
      text-align: left;

      h2 {
        font-size: 0.9rem;
      }
      p,
      a {
        font-size: 0.8rem;
      }
    }
    .socials {
      align-items: center;
    }
  }

  @media screen and (min-width: 100px) {
    .socials {
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1440px) {
    .container {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`;
