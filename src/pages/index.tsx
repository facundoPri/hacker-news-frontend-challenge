import { useRouter } from "next/dist/client/router";
import { Card } from "src/components/Card";
import { Header } from "src/components/Header";
import { NavigationSwitch } from "src/components/NavigationSwitch";
import { Select } from "src/components/Select";
import styles from "../styles/pageStyles.module.css";

export const Home = (): JSX.Element => {
  const router = useRouter();
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
            handleSelection={(value) => alert(value)}
          />
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
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
          <Card
            id={1}
            author={"author"}
            story_title={
              "Yes, React is taking over front-end development. The question is why."
            }
            story_url={"http://ycombinator.com"}
            created_at={"2021-09-16T18:21:51.000Z"}
            favorited={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
