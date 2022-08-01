import type { NextPage } from "next";
import Head from "next/head";
import { GuestBookForm } from "../components/forms/GuestBookForm";
import { trpc } from "../utils/trpc";
import {BsLinkedin, BsMailbox} from 'react-icons/bs';

const Home: NextPage = () => {
  const { data, isLoading, refetch } = trpc.useQuery([
    "guestBook.getBookEntries",
  ]);
  return (
    <div className="m-4">
      <Head>
        <title>John McElreavey</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Me:</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-evenly m-8 justify-items-center">
        <span>
          <a             
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/john-mcelreavey-625a56b0/"
          >
              <BsLinkedin aria-label="My Linked In" className="text-9xl" />
          </a>
        </span>
        <span>
          <a href="mailto: j.mcelreavey@gmail.com">
            <BsMailbox aria-label="My Email" className="text-9xl" />
          </a>
        </span>
      </div>
      <footer>
      <div className="divider">            
        <div className="badge badge-primary uppercase">Retro Stuff</div>
      </div>
      <div className="collapse text-sm lg:text-base">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <h1 className="font-bold uppercase">
            <span className="mx-4">View & Sign my Guestbook!</span>
          </h1>
        </div>
          <div className="collapse-content">
            <GuestBookForm onSuccess={refetch} />

            {isLoading && <p>Loading guestbook entries...</p>}

            {!isLoading && (!data || data?.length === 0) && (
              <p>No guestbook entries found. 🥲</p>
            )}

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
                      <p className="flex font-cedarville-cursive">
                        {guestBook.name}
                      </p>
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
      </div>
      </footer>
    </div>
  );
};

export default Home;
