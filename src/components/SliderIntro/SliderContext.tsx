import { createContext, useContext, useState } from "react";
import { Post } from "../../model/Post";

export interface Slide {
  imageURL: string;
  title: string;
  id: number;
  categories: string[];
  tags: string[];
  description: string;
}

interface ISlider {
  posts: Post[];
  selectedSlide: Slide;
  setSelectedSlide: (selectedSlide: Slide) => void;
}

interface ISliderProviderProps {
  children: React.ReactNode;
  posts: Post[];
}

const SliderContext = createContext<ISlider>({} as ISlider);

export const SliderProvider = ({ children, posts }: ISliderProviderProps) => {
  const [selectedSlide, setSelectedSlide] = useState<Slide>({
    description: posts[0]?.yoast_head_json.og_description,
    title: posts[0]?.yoast_head_json.title,
    imageURL: posts[0]?.yoast_head_json.og_image[0].url,
    id: posts[0].id,
    categories: posts[0].categories,
    tags: posts[0].tags,
  } as Slide);

  return (
    <SliderContext.Provider value={{ selectedSlide, setSelectedSlide, posts }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);

  return context;
};
