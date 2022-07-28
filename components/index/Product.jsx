import Image from "next/image";
import Link from "next/link";
import { ProductStyle } from "./styled/ProductStyled";
import solar from "../../public/saved/solar-transparent.png";
import inverter from "../../public/saved/inverter2.png";
import battery from "../../public/saved/batter-transparent3.png";
import arrow from "../../public/saved/icon-right-arrow.svg";

function Product() {
  return (
    <ProductStyle>
      <ul>
        <li>
          <Link href="/" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={solar} alt="solar" width={135} height={100} />
                </div>
                <h2>Solar Panels</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image
                    src={inverter}
                    alt="inverter"
                    width={135}
                    height={100}
                  />
                </div>
                <h2>Inverters</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={battery} alt="battery" width={135} height={100} />
                </div>
                <h2>Batteries</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/" passHref>
            <a>
              <div className="container">
                <div className="img">
                  <Image src={solar} alt="solar" width={135} height={100} />
                </div>
                <h2>Security Systems</h2>
                <div className="learn">
                  <p>Learn More</p>
                  <Image src={arrow} alt="" layout="intrinsic" />
                </div>
              </div>
            </a>
          </Link>
        </li> */}
      </ul>
    </ProductStyle>
  );
}

export default Product;
