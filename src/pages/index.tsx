import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import wordpressAPIFactory from "../api/wordpress";

import { QueryClient } from "@tanstack/react-query";
import SliderIntro from "../components/SliderIntro";
export async function getStaticProps() {
  const posts = await (await wordpressAPIFactory().getPosts()).data;

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: any) {
  const { getPosts } = wordpressAPIFactory();

  const { data, isFetching, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts().then((res) => res.data),
    initialData: posts,
  });

  if (isFetching) {
    return "Fetching...";
  }

  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      <SliderIntro posts={data}>
        <Header />
      </SliderIntro>
    </>
  );
}
