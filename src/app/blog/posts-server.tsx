import { getPosts } from "@/utils/utils";
import Blog from "./page"; // Import the client component

export default async function PostsServer() {
  const allPostsData = getPosts(['src', 'app', 'blog', 'posts']);
  return <Blog initialPosts={allPostsData} />;
}