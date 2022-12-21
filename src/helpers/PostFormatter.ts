import { Author, Post } from "../model/Post";

interface ICategoriesMapper {
  categories: any[];
  listOfCategories: any[];
}

interface IPostsFormatter {
  posts: Post[];
  authors: Author[];
  categories: any[];
}

interface IPostFormatter {
  post: Post;
  authors: Author[];
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

function PostsFormatter({ posts, categories, authors }: IPostsFormatter) {
  let postsFormatted: Post[] = [];

  for (const post of posts) {
    const postFormatted = PostFormatter({
      post: post,
      categories,
      authors,
    });

    postsFormatted = [...postsFormatted, postFormatted];
  }

  return postsFormatted;
}

export function PostFormatter({ post, categories, authors }: IPostFormatter) {
  let singlePost = post;

  const listCategories = mapCategories({
    categories: post.categories,
    listOfCategories: categories,
  });

  const [author] = authors.filter(
    (author) => author.name === post.yoast_head_json.author
  );

  singlePost = {
    ...singlePost,
    author,
    categories: listCategories,
  };

  return singlePost;
}

export default PostsFormatter;
