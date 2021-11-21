import React from "react";
import classNames from "classnames";

import { EditableLabel } from "../EditableLabel";
import styles from "./styles.module.css";

export const Card = ({ text = "", classes }) => {
  return (
    <div className={classNames(styles.container, classes)}>
      <EditableLabel initialText={text} />
    </div>
  );
};