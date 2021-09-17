import Image from "next/image";
import styles from "./Header.module.css";

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Image src="/hacker-news.svg" height={28} width={208} />
    </div>
  );
};
