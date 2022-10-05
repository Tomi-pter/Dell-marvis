import Image from "next/image";
import batteryMain from "../../public/saved/battery-house.webp";
import solarSide from "../../public/saved/solar.jpg";
import { RenewableStyle } from "./styled/RenewableStyled";

function Renewable() {
  return (
    <RenewableStyle>
      <h1>Renewable Energy</h1>
      <div className="serviceContainer">
        <div className="inner">
          <div className="img">
            <Image src={solarSide} alt="" layout="responsive" />
          </div>
          <article>
            <h2>Convert that sunlight to power</h2>
            <p>
              We procure the best available solar panels to produce electricity
              through the energy from sunlight.Ranging from 60 -Cell Bifacial
              Mono PERC Double Glass Module(30mm) To 72 -Cell Bifacial Mono PERC
              Double Glass Module(30mm).
            </p>
          </article>
        </div>
        <div className="inner">
          <div className="img">
            <Image src={batteryMain} alt="" layout="responsive" />
          </div>
          <article>
            <h2>Supercharge your batteries</h2>
            <p>
              These panels are high energy generation panels with unyielding
              tolerance for harsh environments and extreme weather conditions.
              They are connected to the Batteries and Inverter system to provide
              uninterrupted power supply to your home.
            </p>
          </article>
        </div>
        <div className="inner">
          <aside>
            <h2>Available Services</h2>
            <ul>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Solar Panels</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Inverters</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Batteries</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">UPS</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </RenewableStyle>
  );
}

export default Renewable;
