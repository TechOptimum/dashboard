import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Layout from "../comps/layout";
import { AuthContextProvider } from "../store/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
