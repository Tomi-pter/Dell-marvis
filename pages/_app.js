import Footer from "../components/index/Footer";
import Header from "../components/index/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Footer>
        <Component {...pageProps} />
      </Footer>
    </Header>
  );
}

export default MyApp;
