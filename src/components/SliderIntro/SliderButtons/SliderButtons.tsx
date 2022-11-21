import { Post } from "../../../model/Post";
import { useSlider } from "../SliderContext";
import SliderButton from "./SliderButton";
import { SliderButtonsContainer } from "./styles";

interface ISliderButtonProps {
  quantityOfSlides?: number;
}

function SliderButtons({ quantityOfSlides = 3 }: ISliderButtonProps) {
  const { posts } = useSlider();

  return (
    <SliderButtonsContainer>
      {posts?.map((post: Post, index: number) => {
        if (index >= quantityOfSlides) {
          return;
        }

        return <SliderButton post={post} key={post.id} />;
      })}
    </SliderButtonsContainer>
  );
}

export default SliderButtons;
