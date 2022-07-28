import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Inverter from "../components/services/Inverter";

function InverterPage() {
  return (
    <>
      <Inverter />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default InverterPage;
