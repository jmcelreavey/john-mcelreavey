import type { NextPage } from "next";
import Head from "next/head";
import { BlogForm } from "../../components/forms/BlogForm";
import { trpc } from "../../utils/trpc";

const Home: NextPage = () => {
  const blogs = trpc.useQuery(["blog.getAll"]);
  return (
    <div className="m-4">
      <Head>
        <title>John McElreavey</title>
        <meta name="description" content="John McElreavey's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogForm />
      <div className="mt-4">
        {blogs.data?.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
