import Header from "../components/Header";
import wordpressAPIFactory from "../api/wordpress";

import SliderIntro from "../components/SliderIntro";
import { useEffect, useState } from "react";
import { Post } from "../model/Post";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getPosts } = wordpressAPIFactory();

  useEffect(() => {
    (async () => {
      const data = await getPosts();

      setPosts(data.data);

      setIsLoading(false);
    })();
  }, [getPosts]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            backgroundColor: "#101325",
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        >
          <LoadingScreen />
        </div>
      ) : (
        <SliderIntro posts={posts}>
          <Header />
        </SliderIntro>
      )}
    </>
  );
}
