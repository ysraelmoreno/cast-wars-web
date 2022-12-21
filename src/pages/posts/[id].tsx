import React, { useRef, useEffect } from "react";
import wordpressAPIFactory from "../../api/wordpress";
import Header from "../../components/Header";
import PostPage from "../../components/PostPage";
import { PostFormatter } from "../../helpers/PostFormatter";
import { Post as IPost } from "../../model/Post";
import Head from "next/head";

interface IPostProps {
  post: IPost;
}

export async function getServerSideProps(context: any) {
  const { getPost, getCategories, getAuthors } = wordpressAPIFactory();

  const post = await getPost(context.params.id);
  const { data: categories } = await getCategories();
  const { data: authors } = await getAuthors();

  return {
    props: {
      post: PostFormatter({
        categories,
        post,
        authors,
      }),
    },
  };
}

export default function Post({ post }: IPostProps) {
  return (
    <>
      <Header color="secondary" />
      <PostPage post={post} />
    </>
  );
}
