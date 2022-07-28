import styled from "styled-components";

export const SolarStyle = styled.section`
  h1 {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.33;
    background: var(--bg-black);
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    margin: 0 0 4rem;
    padding: 2rem 0;
    color: white;
    text-align: center;
  }

  .inner {
    margin-bottom: 2rem;
  }

  .img {
    width: 100%;
  }

  article {
    text-align: center;
    padding: 1.5rem;
    color: black;

    h2 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.33;
      text-transform: uppercase;
      letter-spacing: 0.0625rem;
      margin-block: 0 1.5rem;
      margin-inline: auto;
      max-width: 20ch;
    }

    p {
      line-height: 1.66;
      font-size: 0.9375rem;
      margin: 0 0 1.5rem;
    }
  }

  .inner:nth-of-type(2) article {
    background-color: var(--text-orange-light);
    color: white;
  }

  @media screen and (min-width: 641px) {
    h1 {
      padding: 5rem 0;
    }
    .inner {
      max-width: 90%;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
    .img {
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    article {
      border-radius: 0.5rem;

      p {
        padding: 0 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1008px) {
    .inner {
      display: flex;
      gap: 2rem;
      padding-bottom: 8rem;
    }
    .inner:nth-of-type(2) {
      flex-direction: row-reverse;
    }
    .img {
      flex-basis: 180%;
      margin-bottom: 0;
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: left;

      h2 {
        max-width: 100%;
        margin-inline: 0;
        padding: 0 1.5rem;
        align-self: flex-start;
      }
    }
  }
`;
