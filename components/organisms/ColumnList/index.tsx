import React from "react";
import { Column, ColumnProps } from "../Column";

import styles from "./styles.module.css";

export interface ColumnListProps {
  classes?: string;
  columns?: ColumnProps[];
}

export const ColumnList = ({ columns = [], classes }: ColumnListProps) => (
  <div className={styles.container}>
    {columns?.map((column, index) => (
      <Column
        key={(column?.title || "") + index}
        id={(column?.title || "") + index}
        title={column?.title}
        cards={column.cards}
      />
    ))}
  </div>
);
