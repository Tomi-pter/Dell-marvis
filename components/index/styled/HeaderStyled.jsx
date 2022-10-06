import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: var(--bg-black);
  background-color: white;
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  background-color: inherit;
  color: white;
  color: black;

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  li {
    transition: color 350ms;

    &:hover {
      color: var(--text-orange);
    }
  }

  .navItems,
  .logo {
    z-index: 20;
  }

  .navItems svg {
    fill: black;
  }

  .logo {
    width: 200px;

    /* .desktop {
      background-color: white;
    } */
    /* height: 80px; */

    /* .mobile {
      display: block;
    }
    .desktop {
      display: none;
    } */
  }

  ul.desktop {
    display: none;

    li {
      list-style: none;
      margin: 0 1.75rem;
    }
  }

  @media screen and (min-width: 641px) {
    .logo {
      .mobile {
        display: none;
      }
      .desktop {
        display: block;
      }
    }
  }

  @media screen and (min-width: 1008px) {
    ul.desktop {
      display: flex;
      flex-direction: row;
      text-transform: uppercase;
      font-size: 0.85rem;
      font-weight: 400;
    }
    .mobile,
    button,
    .dim {
      display: none;
    }
  }

  .dim {
    background-color: hsl(0, 0%, 0%, 0.5);
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 0;
    z-index: 7;
    transition: all 350ms ease-in-out;
  }
  .dim.clicked {
    visibility: visible;
    width: 100%;
    height: 100%;
  }

  .mobile {
    /* visibility: hidden; */
    position: absolute;
    z-index: 10;
    top: -1000vh;
    left: 0;
    background-color: white;
    width: 100vw;
    /* opacity: 0; */
    padding: 2rem;
    transition: top 350ms ease-in-out;
  }

  .mobile.clicked {
    /* visibility: visible; */
    /* opacity: 1; */
    top: 57px;
  }

  .mobile h2 {
    color: black;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
