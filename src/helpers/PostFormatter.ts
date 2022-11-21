import { Post } from "../model/Post";

interface ICategoriesMapper {
  categories: any[];
  listOfCategories: any[];
}

interface IPostsFormatter {
  posts: Post[];
  categories: any[];
}

interface IPostFormatter {
  post: Post;
  categories: any[];
}

export function mapCategories({
  categories,
  listOfCategories,
}: ICategoriesMapper) {
  const findCategories = categories.map((category) => {
    const filteredCategory = listOfCategories.filter(
      (categoryListed) => categoryListed.id === category
    );

    return filteredCategory[0]?.name;
  });

  return findCategories;
}

function PostsFormatter({ posts, categories }: IPostsFormatter) {
  let postsFormatted: Post[] = [];

  for (const post of posts) {
    const postFormatted = PostFormatter({
      post: post,
      categories,
    });

    postsFormatted = [...postsFormatted, postFormatted];
  }

  return postsFormatted;
}

export function PostFormatter({ post, categories }: IPostFormatter) {
  let singlePost = post;

  const listCategories = mapCategories({
    categories: post.categories,
    listOfCategories: categories,
  });

  singlePost = {
    ...singlePost,
    categories: listCategories,
  };

  return singlePost;
}

export default PostsFormatter;
