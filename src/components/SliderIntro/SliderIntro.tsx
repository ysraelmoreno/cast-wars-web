import { useEffect } from "react";
import { Post } from "../../model/Post";
import SliderButtons from "./SliderButtons";
import { Slide, SliderProvider, useSlider } from "./SliderContext";
import {
  DimmerContainer,
  SliderContainer,
  SliderContentContainer,
  SliderInfoWrapper,
  SliderTitle,
} from "./styles";

interface ISliderIntroProps {
  posts: Post[];
  children: React.ReactNode;
}

function SliderIntro({ posts, children }: ISliderIntroProps) {
  return (
    <SliderProvider>
      <SliderIntroWrapper posts={posts}>{children}</SliderIntroWrapper>
    </SliderProvider>
  );
}

function SliderIntroWrapper({ posts, children }: ISliderIntroProps) {
  const { setPosts, setSelectedSlide, selectedSlide } = useSlider();

  useEffect(() => {
    setPosts(posts);

    const selectedSlide = {
      description: posts[0].yoast_head_json.og_description,
      title: posts[0].yoast_head_json.og_title,
      imageURL: posts[0].yoast_head_json.og_image[0].url,
    } as Slide;

    setSelectedSlide(selectedSlide);
  }, [posts, setPosts, setSelectedSlide]);

  return (
    <>
      <SliderContainer
        css={{
          backgroundColor: "#002C54",
          height: 800,
          backgroundImage: `url(${selectedSlide.imageURL})`,
          backgroundSize: "cover",
          position: "relative",
          zIndex: 1,
          backgroundPosition: "center",
        }}
      >
        <DimmerContainer></DimmerContainer>
        {children}

        <SliderContentContainer>
          <SliderInfoWrapper>
            <SliderTitle>
              <h3>{posts[0].title.rendered}</h3>
              <p>
                {posts[0].yoast_head_json.og_description.substring(0, 201)}...
              </p>
            </SliderTitle>
          </SliderInfoWrapper>
          <SliderButtons></SliderButtons>
        </SliderContentContainer>
      </SliderContainer>
    </>
  );
}

export default SliderIntro;
