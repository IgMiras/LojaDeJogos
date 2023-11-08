import { Home } from "@/components/Home";
import { Layout } from "@/components/Layout";
import { SubHome1 } from "@/components/HomeSec01";
import "@/styles/globals.css";
import { SubHome2 } from "@/components/HomeSec02";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Home />
      <SubHome1 />
      <SubHome2 />
    </Layout>
  );
}
