import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HeaderStyle, NavStyle } from "./styled/HeaderStyled";
import Menu from "../../public/shared/mobile/icon-hamburger.svg";
import Close from "../../public/shared/mobile/icon-close.svg";
import logo from "../../public/saved/logo.png";
import logoMobile from "../../public/saved/logo_mobile.png";
import Product from "./Product";

function Header({ children }) {
  const [opened, setOpened] = useState(false);

  const openNav = () => {
    opened ? setOpened(false) : setOpened(true);

    document?.querySelector(".mobile")?.classList?.add("clicked");
    document?.querySelector(".dim")?.classList?.add("clicked");
  };

  const closeNav = () => {
    !opened ? setOpened(true) : setOpened(false);

    document?.querySelector(".mobile")?.classList?.remove("clicked");
    document?.querySelector(".dim")?.classList?.remove("clicked");
  };

  return (
    <>
      <HeaderStyle>
        <NavStyle>
          <div className="logo">
            <div className="desktop">
              <Image src={logo} alt="dell marvis" />
            </div>
            {/* <div className="mobile">
              <Image src={logoMobile} alt="dell marvis" />
            </div> */}
          </div>
          <div className="navItems">
            <button onClick={opened ? closeNav : openNav}>
              <Image
                src={opened ? Close : Menu}
                alt={opened ? "close" : "menu"}
              />
            </button>
            <ul className="desktop">
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
          </div>
          <div className="dim" onClick={closeNav}></div>
          <div className="mobile">
            <Product />
          </div>
        </NavStyle>
      </HeaderStyle>
      {children}
    </>
  );
}

export default Header;
