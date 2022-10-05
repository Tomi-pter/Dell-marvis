import Link from "next/link";
import { QuoteStyle } from "./styled/QuoteStyled";

function Quote() {
  return (
    <QuoteStyle>
      <h2>Let&apos;s talk about your needs!</h2>
      <p>
        Interested? Contact us today to discuss specifications for your home,
        office or building.
      </p>
      <Link href="/contact">
        <a>
          <span>Get Quote</span>
        </a>
      </Link>
    </QuoteStyle>
  );
}

export default Quote;
