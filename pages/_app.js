// import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@shopify/app-bridge-react";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Cookies from "js-cookie";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  fetchOptions: {
    credentials: "include"
  }
});

const embedApp = ({ Component, pageProps }) => {
  const config = {
    apiKey: API_KEY,
    shopOrigin: Cookies.get("shopOrigin"),
    forceRedirect: true
  };
  return (
    <>
      <Head>
        <title>EmbeddedApp</title>
      </Head>
      <Provider config={config}>
        <AppProvider i18n={translations}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </AppProvider>
      </Provider>
    </>
  );
};

export default embedApp;
