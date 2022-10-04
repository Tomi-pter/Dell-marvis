import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Security from "../components/services/Security";

function SecurityPage() {
  return (
    <>
      <Security />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default SecurityPage;
