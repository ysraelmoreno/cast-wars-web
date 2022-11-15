import { createContext, useContext, useState } from "react";
import { Post } from "../../model/Post";

export interface Slide {
  imageURL: string;
  title: string;
  description: string;
}

interface ISlider {
  posts: Post[];
  selectedSlide: Slide;
  setPosts: (posts: Post[]) => void;
  setSelectedSlide: (selectedSlide: Slide) => void;
}

interface ISliderProviderProps {
  children: React.ReactNode;
}

const SliderContext = createContext<ISlider>({} as ISlider);

export const SliderProvider = ({ children }: ISliderProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedSlide, setSelectedSlide] = useState<Slide>({} as Slide);

  return (
    <SliderContext.Provider
      value={{ selectedSlide, setSelectedSlide, setPosts, posts }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);

  return context;
};
