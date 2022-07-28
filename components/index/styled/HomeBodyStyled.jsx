import styled from "styled-components";
// import inverter from "../../public/saved/String_Inverter_FI.jpg";

export const FirstSection = styled.section`
  position: relative;
  background: var(--bg-black);
  padding: 2rem 0 4rem;
  overflow: hidden;
  z-index: 1;
  text-align: center;

  div {
    margin-bottom: 2rem;
  }

  /* .bgImg::after {
    content: "";
    position: absolute;
    background: black url("/saved/solar-house-transparent.png") center/contain
      no-repeat;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  } */

  .bgImg {
    z-index: -1;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    background-color: var(--bg-black);
    padding: 4rem;
  }

  .text {
    max-width: 100%;
    padding: 0 1.5rem;
    color: white;

    h1 {
      text-transform: uppercase;
      font-size: 2.25rem;
      line-height: 1.1;
      font-weight: 700;
      letter-spacing: 0.0806rem;
    }

    span {
      letter-spacing: 0.625rem;
      display: block;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      color: var(--text-orange);
    }

    p {
      line-height: 1.7;
      font-size: 0.9375rem;
      width: 30ch;
      margin-inline: auto;
    }
  }

  a {
    text-transform: uppercase;
    background: var(--text-orange);
    padding: 0.75rem 2rem;
    font-size: 0.85rem;
    display: block;
    width: 50%;
    margin: 0.5rem auto;
    color: white;
    font-weight: 700;
    letter-spacing: 0.0625rem;
  }

  @media screen and (min-width: 641px) {
    margin-bottom: 12rem;

    a {
      width: 30%;
    }

    .text {
      p {
        width: 55ch;
      }
    }
  }

  @media screen and (min-width: 1008px) {
    display: grid;
    grid-template-areas: "text img" "btn img";
    text-align: left;
    column-gap: 2rem;
    padding-inline: 2rem;
    margin-bottom: 15rem;

    .text {
      grid-area: text;
      max-width: 70%;
      align-self: flex-end;

      h1 {
        font-size: 3.5rem;
      }

      p {
        width: 100%;
      }
    }
    .bgImg {
      grid-area: img;
    }
    .btn {
      grid-area: btn;
      padding-inline: 1.5rem;
    }

    a {
      display: inline-block;
      margin-right: 1rem;
      width: auto;
    }
  }
`;
