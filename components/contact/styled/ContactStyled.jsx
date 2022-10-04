import styled from "styled-components";

export const ContactStyle = styled.section`
  background-color: var(--text-orange);
  margin-bottom: 4rem;

  .text {
    text-align: center;
    padding: 2rem 1.5rem;
    color: white;

    h1 {
      text-transform: uppercase;
      padding-bottom: 1rem;
    }
    p {
      margin: 1.5rem 0 0;
      line-height: 1.66;
      font-size: 0.9375rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 2rem 1.5rem;

    input,
    select {
      outline: none;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      width: 100%;
      background: inherit;
      border-bottom: 1px solid white;
      padding: 1em;
      font-size: 0.93em;
      color: white;
    }

    input::placeholder {
      color: rgb(255, 255, 255, 0.75);
    }

    select {
      padding: 1rem 0.5rem;
    }
    option {
      color: black;
    }

    button {
      cursor: pointer;
      border: 1px solid black;
      text-transform: uppercase;
      background: black;
      padding: 0.75rem 2rem;
      font-size: 0.85rem;
      display: inline-block;
      width: auto;
      margin: 1rem auto;
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
  }

  @media screen and (min-width: 641px) {
    max-width: 90%;
    margin: 2rem auto 10rem;
    border-radius: 0.5rem;

    .text {
      text-align: left;
      max-width: 90%;
      margin: 0 auto;
    }

    form {
      max-width: 90%;
      margin: 0 auto;

      button {
        margin: 1rem 0;
        align-self: flex-end;
      }
    }
  }

  @media screen and (min-width: 1008px) {
    display: flex;
    padding: 3rem 0;

    .text {
      flex-basis: 40%;
    }
    form {
      flex-basis: 50%;
      margin: 0;
      padding-inline: 2rem;
    }
  }
`;
