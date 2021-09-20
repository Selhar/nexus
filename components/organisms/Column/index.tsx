import React from "react";
import { EditableLabel, CardList } from "../../molecules";
import { Droppable } from "react-beautiful-dnd";
import styles from "./styles.module.css";

export interface ColumnProps {
  title?: string;
  cards?: string[];
  id: string;
}

export const Column = ({ title, cards = undefined, id }: ColumnProps) => (
  <div className={styles.container}>
    <EditableLabel initialText={title} containerClasses={styles.label} />
    <Droppable droppableId={id.toString()}>
      {(provided) => (
        <CardList
          innerRef={provided.innerRef}
          {...provided.droppableProps}
          classes={styles.cards}
          texts={cards}
        >
          {provided.placeholder}
        </CardList>
      )}
    </Droppable>
  </div>
);
