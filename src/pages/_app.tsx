import "../components/LoadingScreen/loading.css";
import type { AppProps } from "next/app";
import CastWarsGlobalCSS from "../styles/CastWars.global";

CastWarsGlobalCSS();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
