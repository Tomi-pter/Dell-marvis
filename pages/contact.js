import { useMemo } from "react";
import dynamic from "next/dynamic";
import Contact from "../components/contact/Contact";
import { Container } from ".";
import Product from "../components/index/Product";
// import Product from "../components/index/Product";
// import Map from "../components/contact/Map";

function ContactPage() {
  const Map = useMemo(
    () =>
      dynamic(
        () => import("../components/contact/Map"), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    []
  );

  return (
    <>
      <Contact />
      <Container>
        <Map />
        <Product />
      </Container>
    </>
  );
}

export default ContactPage;
