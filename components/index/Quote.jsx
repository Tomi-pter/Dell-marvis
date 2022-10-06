import Link from "next/link";
import { QuoteStyle } from "./styled/QuoteStyled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Quote() {
  const footRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.from(".contactAside a", {
      scrollTrigger: {
        trigger: ".contactAside",
        start: "top 70%",
        // end: "bottom",
        // markers: true,
        // toggleActions: "restart complete reverse reverse",
      },
      y: "200%",
      delay: 0.5,
    });

    gsap.from(".contactAside .text", {
      scrollTrigger: {
        trigger: ".contactAside",
        start: "top 70%",
        // toggleActions: "restart complete reverse reverse",
      },
      y: "300%",
    });
  }, []);

  return (
    <QuoteStyle className="contactAside">
      <div className="text">
        <h2>Let&apos;s talk about your needs!</h2>
        <p>
          Interested? Contact us today to discuss specifications for your home,
          office or building.
        </p>
      </div>
      <Link href="/contact">
        <a>
          <span>Get Quote</span>
        </a>
      </Link>
    </QuoteStyle>
  );
}

export default Quote;
