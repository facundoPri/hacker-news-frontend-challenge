import Image from "next/image";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./Select.module.css";

type itemProps = {
  name: string;
  value: string;
  src: string;
};

type selectProps = {
  title: string;
  items: itemProps[];
  handleSelection: (string) => void;
};

export const Select = ({
  title,
  items,
  handleSelection,
}: selectProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const select = useRef(null);

  useOnClickOutside(select, () => setOpen(false));

  return (
    <div className={styles.wrapper} ref={select}>
      <div className={styles.header} onClick={() => setOpen(!isOpen)}>
        <div className={styles.header_title}>
          <span>{title}</span>
        </div>
        <div className={styles.header_arrows}>
          <Image src="/icon-arrow.svg" width={14} height={14} />
        </div>
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li className={styles.item} key={`${item.name}-${index}`}>
              <button
                type="button"
                onClick={() => {
                  handleSelection(item.value);
                  setOpen(false);
                }}
              >
                <Image
                  alt={item.name}
                  src={item.src}
                  width={24}
                  height={24}
                  objectFit="contain"
                />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
