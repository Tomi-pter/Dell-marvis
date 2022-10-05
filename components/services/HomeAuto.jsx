import Image from "next/image";
import { RenewableStyle } from "./styled/RenewableStyled";
import smart from "../../public/saved/smart2-removebg-preview.png";
import sound from "../../public/saved/sound-transparent-removebg-preview.png";

function HomeAuto() {
  return (
    <RenewableStyle>
      <h1>Home Automation</h1>
      <div className="serviceContainer">
        <div className="inner">
          <div className="img">
            <Image src={smart} alt="" layout="responsive" />
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
            <Image src={sound} alt="" layout="responsive" />
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
                <span className="name">Sound Systems</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Video & Visuals</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">IP Telephoning</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">VOIP Services</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Smart Homes</span>
              </li>
              <li>
                <span className="circle"></span>{" "}
                <span className="name">Intercoms</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </RenewableStyle>
  );
}

export default HomeAuto;
