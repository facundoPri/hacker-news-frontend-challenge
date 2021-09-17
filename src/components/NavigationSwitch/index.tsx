import Link from "next/link";
import styles from "./NavigationSwitch.module.css";

type NavigationSwitchProps = {
  actualPage: string;
};

export const NavigationSwitch = ({
  actualPage,
}: NavigationSwitchProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <button
          className={`${styles.navigation} ${styles.left_navigation} ${
            actualPage == "/" && styles.selected
          }`}
        >
          All
        </button>
      </Link>
      <Link href="/faves">
        <button
          className={`${styles.navigation} ${styles.right_navigation} ${
            actualPage == "/faves" && styles.selected
          }`}
        >
          My Faves
        </button>
      </Link>
    </div>
  );
};
