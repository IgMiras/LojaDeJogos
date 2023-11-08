import { Home } from "@/components/Home";
import { Layout } from "@/components/Layout";
import { SubHome1 } from "@/components/HomeSec01";
import "@/styles/globals.css";
import { SubHome2 } from "@/components/HomeSec02";
import GlobalFonts from '../Fonts/fonts'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalFonts />
      <Home />
      <SubHome1 />
      <SubHome2 />
    </Layout>
  );
}
