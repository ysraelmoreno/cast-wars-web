import axios from "axios";
import {
  WORDPRESS_API,
  WORDPRESS_POSTS,
  WORDPRESS_VERSION,
  WORDPRESS_CATEGORIES,
  WORDPRESS_TAGS,
} from "../constants";

const wordpressApi = axios.create({
  baseURL: "https://castwars.com",
});

const wordpressAPIFactory = () => {
  const getPosts = async () => {
    const data = await wordpressApi.get(`${WORDPRESS_API}/${WORDPRESS_POSTS}`);

    return data;
  };

  const getPost = async (post: number) => {
    const data = await wordpressApi.get(
      `${WORDPRESS_API}/${WORDPRESS_POSTS}/${post}`
    );

    return data.data;
  };

  const getCategories = async () => {
    const categories = await wordpressApi.get(
      `${WORDPRESS_API}/${WORDPRESS_VERSION}/${WORDPRESS_CATEGORIES}?page=1&per_page=100`
    );
    return categories;
  };

  const getTags = async (params?: Record<string, any>) => {
    const tags = await wordpressApi.get(
      `${WORDPRESS_API}/${WORDPRESS_VERSION}/${WORDPRESS_TAGS}?per_page=${params?.quantity}`
    );

    return tags;
  };

  const getTag = async (tag: number) => {
    const tags = await wordpressApi.get(
      `${WORDPRESS_API}/${WORDPRESS_VERSION}/${WORDPRESS_TAGS}/${tag}`
    );

    return tags;
  };

  return { getPosts, getPost, getCategories, getTags, getTag };
};

export default wordpressAPIFactory;
