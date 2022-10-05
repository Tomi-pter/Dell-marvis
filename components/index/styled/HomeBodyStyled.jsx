import styled from "styled-components";
// import inverter from "../../public/saved/String_Inverter_FI.jpg";

export const FirstSection = styled.section`
  --img: url("/saved/solar-blackBg3-rm.png");

  position: relative;
  padding: 2rem 0 4rem;
  overflow: hidden;
  z-index: 1;
  isolation: isolate;
  font-family: "Roboto" sans-serif;
  /* font-weight: 400; */
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    background: var(--img) var(--bg-black) no-repeat 0%;
    inset: 0;
    z-index: -1;
    /* opacity: 0.55; */
  }

  div {
    margin-bottom: 2rem;
  }

  .intro {
    width: 90%;
    margin: 0 auto;
  }

  .text {
    max-width: 100%;
    color: var(--bg-black);
    text-align: center;

    h1 {
      text-transform: uppercase;
      font-size: 2.25rem;
      line-height: 1.1;
      color: var(--bg-black);
      color: white;
      font-family: "Roboto", sans-serif;
      font-weight: 900;
    }

    span {
      color: var(--text-orange);
      display: block;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    p {
      line-height: 1.7;
      font-size: 0.9375rem;
      width: 30ch;
      margin-inline: auto;
      font-family: "Roboto", sans-serif;
      font-weight: 800;
      color: white;
    }
  }

  .btn {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  a {
    text-transform: uppercase;
    background: var(--text-orange);
    border: 1px solid var(--text-orange);
    padding: 0.75rem 2rem;
    font-size: 0.85rem;
    color: white;
    font-weight: 400;
    letter-spacing: 0.0625rem;
    position: relative;
    overflow: hidden;

    span {
      z-index: 2;
      position: relative;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: -100%;
      top: 0;
      background-color: var(--bg-black);
      z-index: 1;
      transition: all 350ms;
    }

    &:hover {
      &::after {
        left: 0;
      }
    }
  }

  @media screen and (min-width: 641px) {
    --img: url("/saved/solar-blackBg3-rm2.png");

    margin-bottom: 12rem;

    &::after {
      background: var(--img) var(--bg-black) no-repeat 110%/60%;
    }

    .text {
      text-align: left;
      p {
        width: 40ch;
        margin: 0;
      }
    }

    .btn {
      width: 55%;
      justify-content: flex-start;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1008px) {
    /* &::after {
      background-size: 100% 100%;
    } */

    /* display: grid;
    grid-template-areas: "text img" "btn img";
    text-align: left;
    column-gap: 2rem;
    padding-inline: 2rem;
    margin-bottom: 15rem; */

    .text {
      /* grid-area: text;
      max-width: 70%;
      align-self: flex-end; */

      h1 {
        font-size: 3.5rem;
      }

      p {
        width: 40%;
      }
    }
    .bgImg {
      grid-area: img;
    }
    .btn {
      grid-area: btn;
      width: 40%;
    }

    a {
      display: inline-block;
      margin-right: 1rem;
      width: auto;
    }
  }
`;
