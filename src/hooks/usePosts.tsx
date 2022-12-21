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
      const { getPosts, getCategories, getAuthors } = wordpressAPIFactory();

      const [{ data: listPosts }, { data: categories }, { data: authors }] =
        await Promise.all([getPosts(), getCategories(), getAuthors()]);

      const posts = PostsFormatter({
        categories,
        posts: listPosts,
        authors,
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
