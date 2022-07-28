import { FooterStyle } from "./styled/FooterStyled";

function Footer({ children }) {
  return (
    <>
      {children}
      <FooterStyle>
        <div className="container">
          <nav>
            <div className="logo"></div>
            <ul>
              <li>Home</li>
              <li>Solar Panels</li>
              <li>Inverters</li>
              <li>Batteries</li>
            </ul>
          </nav>
          <div className="text">text</div>
        </div>
      </FooterStyle>
    </>
  );
}

export default Footer;
