import "@/styles/globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Emre Atasavun - Fullstack Developer</title>
    <meta name="description" content="Portfolio website of Emre Atasavun, an aspiring full-stack developer." />
    <meta name="google-site-verification" content="imR-XgAaKN6jqTjTVRkDYIj4bUy47COs8ZQCQ5UXQEM" />
    <link rel="icon" href="favicon.svg" type="image/svg+xml"/>
  </Head>
  
  <Component {...pageProps} />
  </>
  );
}
