import { Author } from "../../model/Post";
import { AuthorContainer, AuthorContent, AuthorImage } from "./styles";

interface IAuthorDisplayProps {
  author: Author;
}

function AuthorDisplay({ author }: IAuthorDisplayProps) {
  return (
    <>
      <AuthorContainer>
        <AuthorImage src={author.avatar_urls[48]} />
        <AuthorContent>
          <h4>{author.name}</h4>
          <span>{author.description}</span>
        </AuthorContent>
      </AuthorContainer>
    </>
  );
}

export default AuthorDisplay;
