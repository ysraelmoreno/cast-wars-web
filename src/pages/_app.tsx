import "../components/LoadingScreen/loading.css";
import type { AppProps } from "next/app";
import CastWarsGlobalCSS from "../styles/CastWars.global";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "700"],
});

CastWarsGlobalCSS();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
