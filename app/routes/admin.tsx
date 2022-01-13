import {
  Link,
  LinksFunction,
  LoaderFunction,
  useLoaderData,
  Outlet,
} from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";

export const loader: LoaderFunction = () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="container is-fullhd has-text-centered mt-5">
      <h1 className="title is-1">Admin</h1>
      {posts.map((post) => (
        <>
          <Link to={`/posts/${post.slug}`} key={post.slug} className="">
            {post.title}
          </Link>
          <br />
        </>
      ))}
      <hr />
      <main className="container is-fullhd">
        <h1 className="title is-1">Actions</h1>
        <Outlet />
      </main>
    </div>
  );
}
