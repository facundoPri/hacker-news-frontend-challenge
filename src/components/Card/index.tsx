import styles from "./Card.module.css";
import Image from "next/image";
import { useMemo } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type CardProps = {
  id: string;
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  favorited: boolean;
  handleFav: (CardProps) => void;
};

export const Card = ({
  id,
  author,
  story_title,
  story_url,
  created_at,
  favorited,
  handleFav,
}: CardProps): JSX.Element => {
  const created_ago = useMemo(() => {
    dayjs.extend(relativeTime);
    return dayjs(created_at).fromNow();
  }, [created_at]);

  return (
    <div className={styles.container}>
      <div
        className={styles.textSection}
        onClick={() => {
          window.open(story_url, "_blank").focus();
        }}
      >
        <div className={styles.timeSection}>
          <Image src="/icon-time.svg" alt="clock" width={16} height={16} />
          <span className={styles.time}>
            {created_ago} by {author}
          </span>
        </div>
        <span className={styles.title}>{story_title}</span>
      </div>
      <div
        className={styles.heartSection}
        onClick={() =>
          handleFav({
            id,
            author,
            story_title,
            story_url,
            created_at,
            favorited,
            handleFav,
          })
        }
      >
        {favorited ? (
          <Image
            src="/icon-favorite-full.svg"
            alt="full heart"
            width={24}
            height={22}
          />
        ) : (
          <Image
            src="/icon-favorite-outline.svg"
            alt="outline heart"
            width={24}
            height={22}
          />
        )}
      </div>
    </div>
  );
};
