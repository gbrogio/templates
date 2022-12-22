import type { AppProps } from 'next/app';

import { LayoutProvider } from 'context/Layout';
import Head from 'next/head';

const MyApp: BTypes.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>APP NAME</title>
      </Head>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
};

export default MyApp;
