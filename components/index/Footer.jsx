import Link from "next/link";
import { FooterStyle } from "./styled/FooterStyled";
import {
  Instagram,
  LinkedinSquare,
  Twitter,
  FacebookSquare,
} from "styled-icons/boxicons-logos";

function Footer({ children }) {
  return (
    <>
      {children}
      <FooterStyle>
        <div className="container">
          <nav>
            <div className="logo">logo</div>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/renewable">
                  <a>Renewable Energy</a>
                </Link>
              </li>
              <li>
                <Link href="/security">
                  <a>Security</a>
                </Link>
              </li>
              <li>
                <Link href="/homeAuto">
                  <a>Home Automation</a>
                </Link>
              </li>
              <li>
                <Link href="/data">
                  <a>Data</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text">
            <div className="location">
              <h2>Central Office</h2>
              <p>Block A, 2nd Floor, Bright Star Plaza</p>
              <p>No. 50, Ebitu Ukiwe Street, Jabi, Abuja</p>
            </div>
            <div className="phone">
              <h2>Contact Us (Central Office)</h2>
              <p>P: 08175314151 | 07030975327</p>
              <a href="mailto:dellmarvissystem@gmail.com">
                M: dellmarvissystem@gmail.com
              </a>
            </div>
            <div className="socials">
              <Link href="https://facebook.com">
                <a>
                  <FacebookSquare />
                </a>
              </Link>
              <Link href="https://instagram.com">
                <a>
                  <Instagram />
                </a>
              </Link>
              <Link href="https://linkedin.com">
                <a>
                  <LinkedinSquare />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a>
                  <Twitter />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </FooterStyle>
    </>
  );
}

export default Footer;
