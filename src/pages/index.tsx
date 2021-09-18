import { useRouter } from "next/dist/client/router";
import { useEffect, useRef } from "react";
import { Card } from "src/components/Card";
import { Header } from "src/components/Header";
import { NavigationSwitch } from "src/components/NavigationSwitch";
import { Select } from "src/components/Select";
import { useNews } from "src/data/useNews";
import useLocalStorage from "src/hooks/useLocalStorage";
import { useOnScreen } from "src/hooks/useOnScreen";
import styles from "../styles/pageStyles.module.css";

export const Home = (): JSX.Element => {
  const router = useRouter();
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [selectedNews, setSelectedNews] = useLocalStorage(
    "selectedNews",
    "angular"
  );

  const [favNews, setFavNews] = useLocalStorage("favNews", {});

  const {
    size,
    setSize,
    isReachingEnd,
    isRefreshing,
    news,
    data,
    isLoadingMore,
  } = useNews(selectedNews);

  const handleFav = (news) => {
    const newFavs = { ...favNews };
    if (newFavs[news.id]) {
      delete newFavs[news.id];
    } else {
      console.log(handleFav);
      newFavs[news.id] = {
        ...news,
        favorited: true,
      };
    }
    // console.log(newFavs[news.id]);
    setFavNews(newFavs);
  };

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing, data]);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.navigation}>
          <NavigationSwitch actualPage={router.asPath} />
        </div>
        <div className={styles.selectNews}>
          <Select
            title="Select your news"
            items={[
              {
                src: "/icon-angular.png",
                name: "Angular",
                value: "angular",
              },
              {
                src: "/icon-react.png",
                name: "React",
                value: "reactjs",
              },
              {
                src: "/icon-vuejs.png",
                name: "VueJs",
                value: "vuejs",
              },
            ]}
            handleSelection={(value) => setSelectedNews(value)}
          />
        </div>
        <div className={styles.cardsContainer}>
          {news?.map((info, index) => {
            if (
              !info.author ||
              !info.story_title ||
              !info.story_url ||
              !info.created_at
            )
              return;
            info.id = `${info.author}-${info.story_title}-${info.story_url}-${info.created_at}`;

            return (
              <Card
                key={`${index}-${info.id}`}
                id={info.id}
                author={info.author}
                story_title={info.story_title}
                story_url={info.story_url}
                created_at={info.created_at}
                favorited={favNews[info.id]}
                handleFav={handleFav}
              />
            );
          })}
        </div>
        <div ref={ref}>
          {isLoadingMore ? "loading..." : isReachingEnd ? "no more News" : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
