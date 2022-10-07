import Image from "next/image";
import { useEffect } from "react";
import { PartnersStyle } from "./styled/PartnersStyled";
import uniabj from "../../public/saved/uniabj.png";
import taj from "../../public/saved/tajbank.png";
import ubec from "../../public/saved/ubec.jpg";
import works from "../../public/saved/works.png";
import cbn from "../../public/saved/cbn.gif";

function Partners() {
  useEffect(() => {
    const skillsMarquee = document.querySelector(".all-tools");
    const marqueeDuration = skillsMarquee?.childElementCount * 3;
    const allTools = skillsMarquee?.childNodes;

    allTools?.forEach((tool) => {
      let clone = tool.cloneNode(true);
      skillsMarquee.appendChild(clone);
    });

    // skillsMarquee.style.animationName = 'marquee';
    skillsMarquee.style.animationDuration = `${marqueeDuration}s`;
  }, []);

  return (
    <PartnersStyle>
      <h2>Some Companies {"we've"} worked with</h2>

      <div className="tool-marquee">
        <div className="all-tools">
          <span className="tool">
            <Image src={uniabj} alt="university of abuja" />
          </span>
          <span className="tool">
            <Image src={taj} alt="taj bank" />
          </span>
          <span className="tool">
            <Image src={ubec} alt="ubec" />
          </span>
          <span className="tool">
            <Image src={works} alt="works and housing" />
          </span>
          <span className="tool">
            <Image src={cbn} alt="cbn" />
          </span>
        </div>
      </div>
    </PartnersStyle>
  );
}

export default Partners;
