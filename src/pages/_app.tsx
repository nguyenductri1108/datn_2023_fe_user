import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import AppWrapper from '../components/common/Wrapper/AppWrapper';
import theme from '../themes/theme';
import '@fontsource/nunito';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckUser from '../components/important/checkUser';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <CheckUser>
          <ChakraProvider theme={theme}>
            <AppWrapper>
              <Component {...pageProps} />
            </AppWrapper>
          </ChakraProvider>
        </CheckUser>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
