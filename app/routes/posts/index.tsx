import { Link, useLoaderData } from "remix";
import { getPosts } from "../../post";
import type { Post } from "../../post";

export function loader() {
  return getPosts();
}

export default function Posts() {
  const posts: Post[] = useLoaderData();
  return (
    <div className="has-text-centered">
      <h1 className="title  is-1">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
