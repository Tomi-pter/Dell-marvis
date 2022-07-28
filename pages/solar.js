import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Solar from "../components/services/Solar";

function SolarPage() {
  return (
    <>
      <Solar />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default SolarPage;
