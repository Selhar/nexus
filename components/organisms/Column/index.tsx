import React from "react";
import { EditableLabel, CardList } from "../../molecules";
import styles from "./styles.module.css";

export interface ColumnProps {
  title?: string;
  cards?: string[];
  id: string;
}

export const Column = ({ title, cards = undefined, id }: ColumnProps) => (
  <div className={styles.container}>
    <EditableLabel initialText={title} containerClasses={styles.label} />
    <CardList classes={styles.cards} texts={cards}></CardList>
  </div>
);
