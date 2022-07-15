import type { NextPage } from "next";
import Head from "next/head";
import { GuestBookForm } from "../components/forms/GuestBookForm";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading, refetch } = trpc.useQuery([
    "guestBook.getBookEntries",
  ]);
  return (
    <div className="m-4">
      <Head>
        <title>John McElreavey</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GuestBookForm onSuccess={refetch} />

      <div className="mt-4">
        {isLoading && <p>Loading guestbook entries...</p>}

        {!isLoading && !data && <p>No guestbook entries found. 🥲</p>}

        {!isLoading &&
          data &&
          data?.map((guestBook) => (
            <div key={guestBook.id}>
              <h2>{guestBook.name}</h2>
              <p>{guestBook.content}</p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
