import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Emre Atasavun - Fullstack Developer</title>
        <meta name="description" content="Portfolio website of Emre Atasavun, an aspiring full-stack developer." />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
