import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import Data from "../components/services/Data";

function DataPage() {
  return (
    <>
      <Data />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default DataPage;
