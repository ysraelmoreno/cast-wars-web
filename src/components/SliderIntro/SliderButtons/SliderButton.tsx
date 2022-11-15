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
  const { setSelectedSlide } = useSlider();

  return (
    <SliderButtonContainer
      onClick={(_event) => {
        const img = new Image();
        img.src = post.yoast_head_json.og_image[0].url;

        img.onload = () => {
          if (img.complete) {
            setSelectedSlide({
              title: post.yoast_head_json.title,
              description: post.yoast_head_json.og_description,
              imageURL: post.yoast_head_json.og_image[0].url,
            });
          }
        };
      }}
      key={post.title.rendered}
    >
      <SliderButtonImage>
        <NextImage
          src={post.yoast_head_json.og_image[0].url}
          alt="Slider image"
          width={120}
          height={128}
        />
      </SliderButtonImage>
      <SliderButtonContent>
        <h5>{post.yoast_head_json.og_title}</h5>
        <p>{post.yoast_head_json.og_description.substring(0, 100)}...</p>
      </SliderButtonContent>
    </SliderButtonContainer>
  );
}

export default SliderButton;
