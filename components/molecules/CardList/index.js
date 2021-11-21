import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

import { Card } from "..";

export const CardList = ({
  texts = [""],
  classes,
  innerRef,
}) => (
  <div className={classNames(classes)} ref={innerRef}>
    {texts?.map((text, index) => (
      <Card
        key={text + index}
        index={index}
        text={text}
      />
    ))}
  </div>
);