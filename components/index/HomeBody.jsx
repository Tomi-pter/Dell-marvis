import Link from "next/link";
import Image from "next/image";
import { FirstSection } from "./styled/HomeBodyStyled";
import solar from "../../public/saved/home2.jpg";

function HomeBody() {
  return (
    <>
      <FirstSection>
        <div className="intro">
          <div className="text">
            <h1>
              <span>Featured</span> Solar Panels
            </h1>
            <p>
              Seamlessly converts the energy from sunlight directly into
              electricity. Paired alongside a battery/batteries and a solar
              panel/panels, ensure you never run out power in your residence.
            </p>
          </div>
          <div className="btn">
            <Link href="/homeAuto">
              <a>
                <span>Learn more</span>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <span>Get quote</span>
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="bgImg">
          <Image src={solar} alt="solar" priority />
        </div> */}
      </FirstSection>
    </>
  );
}

export default HomeBody;
