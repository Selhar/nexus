import classNames from "classnames";
import styles from "./styles.module.css";

export interface labelProps {
  text: string;
  onClickHandler?: () => void;
  classes?: string;
}

export const Label = ({ text, onClickHandler, classes = "" }: labelProps) => (
  <span onClick={onClickHandler} className={classNames(styles.error, classes)}>
    {text}
  </span>
);
