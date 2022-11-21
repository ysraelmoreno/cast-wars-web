import { useRouter } from "next/router";
import wordpressAPIFactory from "../../api/wordpress";
import Header from "../../components/Header";
import PostPage from "../../components/PostPage";
import { PostFormatter } from "../../helpers/PostFormatter";
import usePostFormatter from "../../hooks/usePostFormatter";
import { Post as IPost } from "../../model/Post";

interface IPostProps {
  post: IPost;
}

export async function getServerSideProps(context: any) {
  const { getPost, getCategories } = wordpressAPIFactory();

  const post = await getPost(context.params.id);
  const { data: categories } = await getCategories();

  return {
    props: {
      post: PostFormatter({
        categories,
        post,
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
