import Header from "../components/Header";

import SliderIntro from "../components/SliderIntro";
import LoadingScreen from "../components/LoadingScreen";
import Head from "next/head";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const { isLoading, posts } = usePosts();

  return (
    <>
      <Head>
        <title>Home - Cast Wars</title>
      </Head>
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
