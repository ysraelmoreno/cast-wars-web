import axios from "axios";
import {
  WORDPRESS_API,
  WORDPRESS_POSTS,
  WORDPRESS_VERSION,
} from "../constants";

const wordpressApi = axios.create({
  baseURL: "https://castwars.com",
});

const wordpressAPIFactory = () => {
  const getPosts = async () => {
    const data = await wordpressApi.get(`${WORDPRESS_API}/${WORDPRESS_POSTS}`);

    return data;
  };

  return { getPosts };
};

export default wordpressAPIFactory;
