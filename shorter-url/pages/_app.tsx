import { UrlProvider } from "@/context/UrlContext";
import "@/styles/globals.css"; // Seus estilos globais

import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrlProvider >
      <Component {...pageProps} />
    </UrlProvider>
  );
}