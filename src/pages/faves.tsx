import { useRouter } from "next/dist/client/router";
import { Card } from "src/components/Card";
import { Header } from "src/components/Header";
import { NavigationSwitch } from "src/components/NavigationSwitch";
import useLocalStorage from "src/hooks/useLocalStorage";

import styles from "../styles/pageStyles.module.css";

export const Faves = (): JSX.Element => {
  const router = useRouter();
  const [favNews, setFavNews] = useLocalStorage("favNews", {});

  const handleUnFav = (news) => {
    const newFavs = { ...favNews };
    if (newFavs[news.id]) delete newFavs[news.id];
    setFavNews(newFavs);
  };

  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.navigation}>
          <NavigationSwitch actualPage={router.asPath} />
        </div>
        <div className={styles.cardsContainer}>
          {Object.values(favNews).map((info, index) => (
            <Card
              key={`${index}-${info.id}`}
              id={info.id}
              author={info.author}
              story_title={info.story_title}
              story_url={info.story_url}
              created_at={info.created_at}
              favorited={info.favorited}
              handleFav={handleUnFav}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faves;
