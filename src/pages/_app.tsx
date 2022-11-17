import '../styles/globals.css';

import * as React from 'react';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}
