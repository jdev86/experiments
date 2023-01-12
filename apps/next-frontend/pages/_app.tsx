import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from './layout';

function CustomApp({ Component, pageProps }: AppProps) {
  // const border = store.hours < 12 ? "linear-gradient(to right, #032642, #05518e, #0d73c6)" : "linear-gradient(to right, #ed692d, #f2b04d, #efc36b)"

  return (
    <>
      <Head>
        <title>Welcome to next-frontend!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
