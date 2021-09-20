import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

import { Card } from "..";

export interface CardListProps {
  texts?: string[];
  classes?: string;
  children?: ReactNode;
  innerRef?: any;
}

export const CardList = ({
  texts = [""],
  classes,
  innerRef,
}: CardListProps) => (
  <div className={classNames(classes)} ref={innerRef}>
    {texts?.map((text, index) => (
      <Card
        key={text + index}
        id={(text + index).toString()}
        index={index}
        text={text}
        classes={styles.card}
      />
    ))}
  </div>
);
