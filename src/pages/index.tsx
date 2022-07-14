import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="m-4">
      <Head>
        <title>John McElreavey</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello World</div>
    </div>
  );
};

export default Home;
