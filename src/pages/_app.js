import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Tambahkan tag link untuk favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
