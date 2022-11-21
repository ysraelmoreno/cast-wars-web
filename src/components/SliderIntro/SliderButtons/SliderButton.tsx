import { default as NextImage } from "next/image";
import { Post } from "../../../model/Post";
import { useSlider } from "../SliderContext";
import {
  SliderButtonContainer,
  SliderButtonContent,
  SliderButtonImage,
} from "./styles";

interface ISliderButtonProps {
  post: Post;
}

function SliderButton({ post }: ISliderButtonProps) {
  const { setSelectedSlide, selectedSlide } = useSlider();

  return (
    <SliderButtonContainer
      active={selectedSlide.title === post.yoast_head_json.og_title}
      onClick={(_event) => {
        const img = new Image();
        img.src = post.yoast_head_json.og_image[0].url;

        img.onload = () => {
          if (img.complete) {
            setSelectedSlide({
              title: post.yoast_head_json.title,
              description: post.yoast_head_json.og_description,
              imageURL: post.yoast_head_json.og_image[0].url,
              id: post.id,
              tags: post.tags,
              categories: post.categories,
            });
          }
        };
      }}
      key={post.title.rendered}
    >
      <SliderButtonImage
        css={{
          backgroundImage: `url(${post.yoast_head_json.og_image[0].url})`,
        }}
      ></SliderButtonImage>
      <SliderButtonContent>
        <h4>{post.yoast_head_json.og_title.replace(" - Cast Wars", "")}</h4>
        <p>{post.yoast_head_json.og_description.substring(0, 100)}...</p>
      </SliderButtonContent>
    </SliderButtonContainer>
  );
}

export default SliderButton;
