import "@/styles/globals.css";
import "@/styles/custom.css";
import Layout from "@/components/layout";
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(App);