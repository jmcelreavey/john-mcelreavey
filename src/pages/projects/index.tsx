import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="m-4 flex space-x-4 justify-center">
      <Head>
        <title>Personal Projects</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <div className="card w-11/12 lg:w-3/12 bg-base-100 shadow-xl image-full">
        <figure>
          <Image
            src={"/gifs/gitjob.gif"}
            width={400}
            height={600}
            alt={"https://www.gitjob.co.uk"}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">GitJob</h2>
          <p>Like Tinder, but for jobs...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a
                href="https://www.gitjob.co.uk"
                rel={"noreferrer"}
                target={"_blank"}
              >
                Check it out!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
