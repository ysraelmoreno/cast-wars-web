import { useState, useEffect } from "react";
import apiRoutes from "../api/api";
import wordpressAPIFactory from "../api/wordpress";
import PostsFormatter from "../helpers/PostFormatter";
import { Post } from "../model/Post";

function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { getPosts, getCategories } = wordpressAPIFactory();

      const [{ data: listPosts }, { data: categories }] = await Promise.all([
        getPosts(),
        getCategories(),
      ]);

      const posts = PostsFormatter({
        categories,
        posts: listPosts,
      });

      setPosts(posts);

      setIsLoading(false);
    })();
  }, []);

  return {
    posts,
    isLoading,
  };
}

export default usePosts;
