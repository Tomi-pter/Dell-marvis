import styled from "styled-components";

export const QuoteStyle = styled.aside`
  background-color: var(--text-orange);
  margin: 4rem auto 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  color: white;
  text-align: center;

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

  a {
    background-color: var(--bg-black);
    text-transform: uppercase;
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
  }

  @media screen and (min-width: 641px) {
    max-width: 80%;
  }

  @media screen and (min-width: 1008px) {
    max-width: 70%;
  }
`;
