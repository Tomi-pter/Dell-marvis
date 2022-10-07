import styled from "styled-components";

export const PartnersStyle = styled.section`
  padding: 5rem 0;

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    text-align: center;
    margin: 0.5rem 0;
  }

  .tool-marquee {
    margin-top: 20px;
    display: flex;
    overflow: hidden;
    width: 100%;

    .all-tools {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      will-change: transform;
      animation-name: marquee;
      // animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-play-state: running;
      &:hover {
        animation-play-state: paused;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      span {
        margin: 1.5rem 0;
        position: relative;
        width: 300px;

        /* &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          height: 16px;
          width: 15px;
          border: 1px solid black;
          border-radius: 7px;
        } */
      }
    }
  }
`;
