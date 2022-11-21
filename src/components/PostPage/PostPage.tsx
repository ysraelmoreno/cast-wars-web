import React from "react";
import { Post } from "../../model/Post";
import {
  PostContainer,
  PostData,
  PostHeaderContainer,
  PostImage,
  PostTitle,
} from "./styles";
import { FiClock, FiUser } from "react-icons/fi";
import Chip from "../Chip";
import DescriptionParser from "./DescriptionParser";
interface IPostProps {
  post: Post;
}

function PostPage({ post }: IPostProps) {
  return (
    <PostContainer>
      <PostHeaderContainer>
        {post.categories?.length > 0 &&
          post.categories.map((category) => (
            <Chip key={category} color="secondary">
              {category}
            </Chip>
          ))}
        <PostTitle>{post.title.rendered}</PostTitle>

        <PostData>
          <div>
            <FiClock />
            <span>
              {new Intl.DateTimeFormat("pt-BR").format(new Date(post.date))}
            </span>
          </div>
          <div>
            <FiUser />
            <span>{post.yoast_head_json.author}</span>
          </div>
        </PostData>
        <PostImage src={post.yoast_head_json.og_image[0].url} />
      </PostHeaderContainer>
      <DescriptionParser html={post.content.rendered} />
    </PostContainer>
  );
}

export default PostPage;
