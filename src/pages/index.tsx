import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="m-4">
      <Head>
        <title>John McElreavey</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}</div>
    </div>
  );
};

export default Home;
