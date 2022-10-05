import Image from "next/image";
import { RenewableStyle } from "./styled/RenewableStyled";
import cctv from "../../public/saved/cctv2-removebg-preview.png";
import lock from "../../public/saved/lock2.webp";
import security from "../../public/saved/cctv-transparent.png";

function Security() {
  return (
    <RenewableStyle>
      <h1>Security</h1>
      <div className="serviceContainer">
        <div className="inner">
          <div className="img">
            <Image src={cctv} alt="" layout="responsive" />
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
            <Image src={lock} alt="" layout="responsive" />
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
                <span className="name">CCTV</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Burglary Alarm</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Electric Fence</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Fire Alarm</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Biometric Door Lock</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </RenewableStyle>
  );
}

export default Security;
