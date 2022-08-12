import "../styles/globals.css";
import "../styles/custom.scss";
import type { AppProps } from "next/app";
import MainTemplate from "../components/layout/template/MainTemplate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
