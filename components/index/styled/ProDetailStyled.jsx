import styled from "styled-components";

export const ProDetailStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;

  .detail {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3.5rem 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--text-orange);
    overflow: hidden;
  }

  h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1;
    max-width: 10ch;
    margin: 1.5rem auto;
    letter-spacing: 0.0806em;
    color: white;
    text-transform: uppercase;
  }

  p {
    font-weight: 200;
    line-height: 1.56;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.75);
    max-width: 30ch;
    margin: 1rem auto 4rem;
  }

  a {
    text-transform: uppercase;
    background: black;
    border: 1px solid black;
    padding: 0.75rem 2rem;
    font-size: 0.85rem;
    display: inline-block;
    width: auto;
    margin: 0.5rem auto;
    color: white;
    font-weight: 700;
    letter-spacing: 0.0625rem;
    white-space: nowrap;
    vertical-align: middle;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: auto;
    line-height: 1.2;
    position: relative;
    overflow: hidden;

    span {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: -100%;
      top: 0;
      background-color: var(--text-orange);
      z-index: 1;
      transition: all 350ms;
    }

    &:hover {
      &::after {
        left: 0;
      }
    }
  }

  .basic {
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--bg-dark-grey);
    position: relative;

    .text {
      position: absolute;
      top: 50%;
      left: 1.5rem;
      transform: translateY(-50%);
    }

    .img {
      position: relative;
      right: -10rem;
      max-height: 18rem;
    }

    h2 {
      font-size: 1.75rem;
      line-height: 1.33;
      margin-bottom: 2rem;
      color: black;
    }

    a {
      background-color: var(--bg-dark-grey);
      border: 1px solid black;
      color: black;
      transition: color 350ms;

      &::after {
        background-color: black;
      }

      &:hover {
        color: white;
      }
    }
  }

  .grid {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 1fr;
    margin-top: 1.5rem;
    overflow: hidden;

    .img {
      overflow: hidden;
      border-radius: 0.5rem;
    }

    a {
      background-color: var(--bg-dark-grey);
      border: 1px solid black;
      color: black;
      margin: 0;
      transition: color 350ms;

      &::after {
        background-color: black;
      }

      &:hover {
        color: white;
      }
    }

    .text {
      border-radius: 0.5rem;
      background-color: var(--bg-dark-grey);
      padding: 2.5rem 1.5rem;
    }

    h2 {
      font-size: 1.75rem;
      line-height: 1.33;
      margin: 0 0 2rem;
      color: black;
      max-width: 100%;
    }
  }

  aside {
    margin-top: 7.5rem;
    text-align: center;

    h2 {
      font-size: 1.75rem;
      line-height: 1.33;
      margin-bottom: 2rem;
      letter-spacing: 0.0894rem;
      max-width: 20ch;
      color: black;
    }

    span {
      color: var(--text-orange);
    }

    p {
      font-weight: 400;
      line-height: 1.66;
      font-size: 0.9375rem;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .dell {
    overflow: hidden;
  }

  @media screen and (min-width: 641px) {
    .detail {
      .img {
        padding: 2rem;
      }
    }

    h2 {
      font-size: 3.5rem;
      letter-spacing: 0.125em;
    }

    p {
      max-width: 50ch;
    }

    .basic {
      .text {
        left: 10%;
      }
      .img {
        top: -5rem;
        right: -16.5rem;
      }
    }

    .grid {
      grid-template-columns: 1fr 1fr;
    }

    aside {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 2.5rem;
        max-width: 25ch;
        line-height: 1.2;
      }
      p {
        max-width: 65ch;
      }
    }
  }

  @media screen and (min-width: 1008px) {
    .detail {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;

      .text {
        align-self: center;

        h2 {
          margin: unset;
        }
      }
    }

    .grid {
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
