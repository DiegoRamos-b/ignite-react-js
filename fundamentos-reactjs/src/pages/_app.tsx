import type { AppProps } from "next/app";

import Image from "next/image";

import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img
          src="https://raw.githubusercontent.com/rocketseat-education/04-ignite-shop/a06358d9d761af6b54ca269e722d2015b3f137b5/src/assets/logo.svg"
          alt="logo"
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
