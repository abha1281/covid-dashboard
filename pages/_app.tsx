import "../styles/globals.css";
import "../styles/custom.scss";
import type { AppProps } from "next/app";
import MainTemplate from "../components/layout/template/MainTemplate";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainTemplate>
        <Component {...pageProps} />
      </MainTemplate>
    </RecoilRoot>
  );
}

export default MyApp;
