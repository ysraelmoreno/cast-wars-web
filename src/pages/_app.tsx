import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import CastWarsGlobalCSS from "../styles/CastWars.global";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "700"],
});

const queryClient = new QueryClient();
CastWarsGlobalCSS();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
