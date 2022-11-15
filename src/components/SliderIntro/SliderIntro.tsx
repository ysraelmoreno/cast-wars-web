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
    <SliderProvider posts={posts}>
      <SliderIntroWrapper posts={posts}>{children}</SliderIntroWrapper>
    </SliderProvider>
  );
}

function SliderIntroWrapper({ posts, children }: ISliderIntroProps) {
  const { setSelectedSlide, selectedSlide } = useSlider();

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
              <h3>{selectedSlide.title}</h3>
              <p>{selectedSlide.description?.substring(0, 201)}...</p>
            </SliderTitle>
          </SliderInfoWrapper>
          <SliderButtons></SliderButtons>
        </SliderContentContainer>
      </SliderContainer>
    </>
  );
}

export default SliderIntro;
