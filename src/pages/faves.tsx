import { useRouter } from "next/dist/client/router";
import { Card } from "src/components/Card";
import { Header } from "src/components/Header";
import { NavigationSwitch } from "src/components/NavigationSwitch";

import styles from "../styles/pageStyles.module.css";

export const Faves = (): JSX.Element => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.navigation}>
          <NavigationSwitch actualPage={router.asPath} />
        </div>
        <div className={styles.cardsContainer}>
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url="http://ycombinator.com"
            created_at="2021-09-16T18:21:51.000Z"
            favorited={true}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={true}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={true}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={true}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Faves;
