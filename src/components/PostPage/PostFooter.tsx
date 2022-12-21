import { Author } from "../../model/Post";
import AuthorDisplay from "./AuthorDisplay";
import { PostFooterContainer } from "./styles";

interface IPostFooter {
  author: Author;
}

function PostFooter({ author }: IPostFooter) {
  return (
    <>
      <PostFooterContainer>
        <AuthorDisplay author={author} />
      </PostFooterContainer>
    </>
  );
}

export default PostFooter;
