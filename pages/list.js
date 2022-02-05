import Head from "next/head";
import CardList from "../components/Spaces/CardList";
import Layout from "../components/Layout/Layout";

export default function List() {
  return (
    <Layout>
      <Head>
        <title>DAOdective</title>
        <meta name="description" content="DAOdective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CardList />
    </Layout>
  );
}
