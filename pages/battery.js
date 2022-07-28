import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Battery from "../components/services/Battery";

function BatteryPage() {
  return (
    <>
      <Battery />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default BatteryPage;
