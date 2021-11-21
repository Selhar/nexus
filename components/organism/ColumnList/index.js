import React from "react";
import { Column } from "../Column";

import styles from "./styles.module.css";

export const ColumnList = ({ columns = [] }) => (
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