import Image from "next/image";
import Link from "next/link";
import { ProDetailStyle } from "./styled/ProDetailStyled";
import tenKVA from "../../public/saved/10kva-transparent.png";
import smart from "../../public/saved/smart-transparent.png";
import router from "../../public/saved/router.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ProDetail() {
  useEffect(() => {
    gsap.defaults({
      duration: 1,
    });

    gsap.from(".detail .img", {
      x: "-500%",
      scrollTrigger: {
        trigger: ".detail",
        markers: true,
        start: "top 50%",
      },
    });
    gsap.from(".detail .text *", {
      x: "500%",
      delay: 0.5,
      stagger: 0.5,
      scrub: true,
      scrollTrigger: {
        trigger: ".detail",
        markers: true,
        start: "top 50%",
      },
    });

    gsap.from(".basic .img", {
      x: "500%",
      scrollTrigger: {
        trigger: ".basic",
        start: "top 50%",
      },
    });
    gsap.from(".basic .text *", {
      x: "-500%",
      delay: 0.5,
      stagger: 0.5,
      scrub: true,
      scrollTrigger: {
        trigger: ".basic",
        start: "top 50%",
      },
    });

    gsap.from(".grid .img", {
      x: "-500%",
      scrollTrigger: {
        trigger: ".grid",
        start: "top 50%",
      },
    });
    gsap.from(".grid .text *", {
      x: "500%",
      delay: 0.5,
      stagger: 0.5,
      scrub: true,
      scrollTrigger: {
        trigger: ".grid",
        start: "top 50%",
      },
    });

    gsap.from(".dell *", {
      y: "500%",
      stagger: 0.5,
      scrub: true,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dell",
        start: "top 50%",
      },
    });
  }, []);

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
              <a>
                <span>Learn more</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="basic">
          <div className="img">
            <Image src={smart} alt="smart assistant" />
          </div>
          <div className="text">
            <h2>Smart Assistant</h2>
            <Link href={"/"}>
              <a>
                <span>Learn More</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="grid">
          <div className="img">
            <Image src={router} alt="router" layout="responsive" />
          </div>
          <div className="text">
            <h2>Voice and Data</h2>
            <Link href={"/"}>
              <a>
                <span>Learn More</span>
              </a>
            </Link>
          </div>
        </div>

        <aside className="dell">
          <h2>
            Bringing <span>Comfort</span> to your doorsteps
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
