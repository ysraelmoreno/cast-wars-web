import { useCallback, useEffect, useState } from "react";
import { PostFormatter } from "../helpers/PostFormatter";
import { Post } from "../model/Post";
import useCategories from "./useCategories";

interface IUsePostFormatter {
  post: Post;
}

function usePostFormatter({ post }: IUsePostFormatter) {
  const [postFormatted, setPostFormatted] = useState({} as Post);

  const { categories } = useCategories();

  const getPostFormatted = useCallback(async () => {
    const formattedPost = PostFormatter({
      categories,
      post,
    });

    return formattedPost;
  }, [categories, post]);

  useEffect(() => {
    (async () => {
      const postFormatted = await getPostFormatted();

      setPostFormatted(postFormatted);
    })();
  }, [getPostFormatted]);

  return postFormatted;
}

export default usePostFormatter;
