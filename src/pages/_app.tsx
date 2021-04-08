import { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@dfp/components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
