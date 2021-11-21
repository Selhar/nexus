import classNames from "classnames";
import styles from "./styles.module.css";


export const Label = ({ text, onClickHandler, classes = "" }) => (
  <span onClick={onClickHandler} className={classNames(styles.error, classes)}>
    {text}
  </span>
);