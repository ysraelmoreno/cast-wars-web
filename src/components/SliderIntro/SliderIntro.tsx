import { useRouter } from "next/router";
import { Post } from "../../model/Post";
import Button from "../Button";
import Chip from "../Chip";
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

function SliderIntroWrapper({ children }: ISliderIntroProps) {
  const { selectedSlide } = useSlider();

  const router = useRouter();

  return (
    <>
      <SliderContainer
        css={{
          backgroundColor: "$secondary",
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
              {selectedSlide.categories[0] && (
                <Chip
                  css={{
                    marginBottom: "15px",
                  }}
                >
                  {selectedSlide.categories[0]}
                </Chip>
              )}
              <h1>{selectedSlide.title.replace(" - Cast Wars", "")}</h1>
              <p>{selectedSlide.description?.substring(0, 201)}...</p>
              <Button
                onClick={() => {
                  router.push(`/posts/${selectedSlide.id}`);
                }}
                variant="secondary"
                css={{
                  marginTop: "20px",
                }}
              >
                Ler notícia
              </Button>
            </SliderTitle>
          </SliderInfoWrapper>
          <SliderButtons />
        </SliderContentContainer>
      </SliderContainer>
    </>
  );
}

export default SliderIntro;
