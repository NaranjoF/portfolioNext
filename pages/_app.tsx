import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
