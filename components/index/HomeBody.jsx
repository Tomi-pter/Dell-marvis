import Link from "next/link";
import Image from "next/image";
import { FirstSection } from "./styled/HomeBodyStyled";
import solar from "../../public/saved/10kva-transparent.png";

function HomeBody() {
  return (
    <>
      <FirstSection>
        <div className="text">
          <h1>
            <span>Featured</span> Inverters
          </h1>
          <p>
            Seamlessly converts the energy from sunlight directly into
            electricity.
          </p>
        </div>
        <div className="bgImg">
          <Image src={solar} alt="solar" />
        </div>
        <div className="btn">
          <Link href="/">
            <a>Learn more</a>
          </Link>
          <Link href="/">
            <a>Get quote</a>
          </Link>
        </div>
      </FirstSection>
    </>
  );
}

export default HomeBody;
