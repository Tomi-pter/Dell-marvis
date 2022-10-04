import { Container } from ".";
import Product from "../components/index/Product";
import Quote from "../components/index/Quote";
import HomeAuto from "../components/services/HomeAuto";

function HomeAutoPage() {
  return (
    <>
      <HomeAuto />
      <Container>
        <Product />
        <Quote />
      </Container>
    </>
  );
}

export default HomeAutoPage;
