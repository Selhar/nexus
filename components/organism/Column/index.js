import React from "react";
import { EditableLabel, CardList } from "../../molecules";
import styles from "./styles.module.css";

export const Column = ({ title, cards = undefined, id }) => (
  <div className={styles.container}>
    <EditableLabel initialText={title} containerClasses={styles.label} />
    <CardList classes={styles.cards} texts={cards} />
  </div>
);