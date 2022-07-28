import Image from "next/image";
import Link from "next/link";
import { ProDetailStyle } from "./styled/ProDetailStyled";
import tenKVA from "../../public/saved/10kva-transparent.png";
import battery from "../../public/saved/batter-transparent2.png";
import solar from "../../public/saved/solar.jpg";

function ProDetail() {
  return (
    <ProDetailStyle>
      <article>
        <div className="detail">
          <div className="img">
            <Image src={tenKVA} alt="10kva inverter" />
          </div>
          <div className="text">
            <h2>10KVA 48V Inverter</h2>
            <p>
              Low frequency inverter 220VAC, WIF/GPRS remote monitoring,
              built-in MPPT solar charge controller
            </p>
            <Link href={"/"}>
              <a>Learn more</a>
            </Link>
          </div>
        </div>

        <div className="basic">
          <div className="img">
            <Image src={battery} alt="battery" />
          </div>
          <div className="text">
            <h2>160ah Battery</h2>
            <Link href={"/"}>
              <a>Learn More</a>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="img">
            <Image src={solar} alt="solar" layout="responsive" />
          </div>
          <div className="text">
            <h2>Solar Panels</h2>
            <Link href={"/"}>
              <a>Learn More</a>
            </Link>
          </div>
        </div>

        <aside>
          <h2>
            Bringing you the <span>Best</span> electrical solutions
          </h2>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </aside>
      </article>
    </ProDetailStyle>
  );
}

export default ProDetail;
