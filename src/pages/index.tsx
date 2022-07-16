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

      {isLoading && <p>Loading guestbook entries...</p>}

      {!isLoading && !data && <p>No guestbook entries found. 🥲</p>}

      {!isLoading &&
        data &&
        data?.map((guestBook) => (
          <div
            className="m-4 bg-neutral shadow-xl card card-side"
            key={guestBook.id}
          >
            <div className="card-body">
              <div className="flex gap-x-4">
                <label>Signed:</label>
                <p className="flex font-cedarville-cursive">{guestBook.name}</p>
                <div className="flex items-end">
                  <p>{guestBook.createdAt.toDateString()}</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-x-4">
                <label>Message:</label>
                <p>{guestBook.content}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
