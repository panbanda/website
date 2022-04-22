import type { AppProps } from "next/app";
import { extendTheme, ThemeProvider, CSSReset } from "@chakra-ui/react";

const theme = extendTheme();

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
