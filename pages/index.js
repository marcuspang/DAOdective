import Head from "next/head";
import Hero from "../components/Layout/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DAOdective</title>
        <meta name="description" content="DAOdective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
}
