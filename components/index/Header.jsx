import Image from "next/image";
import { useState } from "react";
import { HeaderStyle, NavStyle } from "./styled/HeaderStyled";
import Menu from "../../public/shared/mobile/icon-hamburger.svg";
import Close from "../../public/shared/mobile/icon-close.svg";
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
          <div className="logo">logo</div>
          <div className="navItems">
            <button onClick={opened ? closeNav : openNav}>
              <Image
                src={opened ? Close : Menu}
                alt={opened ? "close" : "menu"}
              />
            </button>
            <ul className="desktop">
              <li>Home</li>
              <li>Inverters</li>
              <li>Batteries</li>
              <li>Solar Panels</li>
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
