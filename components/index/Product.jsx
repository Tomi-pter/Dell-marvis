import Image from "next/image";
import Link from "next/link";
import { ProductStyle } from "./styled/ProductStyled";
import solar from "../../public/saved/solar-black-removebg-preview.png";
import security from "../../public/saved/cctv-transparent.png";
import home from "../../public/saved/smart-transparent.png";
import data from "../../public/saved/router-black-removebg-preview.png";
import arrow from "../../public/saved/icon-right-arrow.svg";

function Product() {
  return (
    <ProductStyle>
      <ul>
        <li>
          <Link href="/renewable" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={solar} alt="solar" width={135} height={100} />
                </div>
                <h2>Renewable Energy</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/security" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image
                    src={security}
                    alt="inverter"
                    width={135}
                    height={100}
                  />
                </div>
                <h2>Security</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/homeAuto" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={home} alt="battery" width={135} height={100} />
                </div>
                <h2>Home Automation</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/data" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={data} alt="solar" width={135} height={120} />
                </div>
                <h2>Data</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </ProductStyle>
  );
}

export default Product;
