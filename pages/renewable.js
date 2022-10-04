import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Renewable from "../components/services/Renewable";

function RenewablePage() {
  return (
    <>
      <Renewable />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default RenewablePage;
