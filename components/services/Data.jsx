import Image from "next/image";
import { RenewableStyle } from "./styled/RenewableStyled";
import router from "../../public/saved/router.png";
import vsat from "../../public/saved/vsat2-removebg-preview.png";

function Data() {
  return (
    <RenewableStyle>
      <h1>Data</h1>
      <div className="serviceContainer">
        <div className="inner">
          <div className="img">
            <Image src={router} alt="" layout="responsive" />
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
            <Image src={vsat} alt="" layout="responsive" />
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
                <span className="name">WLAN</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">VSAT</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">FTH (Fibre to Home)</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Networking</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </RenewableStyle>
  );
}

export default Data;
