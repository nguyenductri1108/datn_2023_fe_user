import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import AppWrapper from '../components/common/Wrapper/AppWrapper';
import theme from '../themes/theme';
import '@fontsource/nunito';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
