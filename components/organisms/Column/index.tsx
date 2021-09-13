import React from 'react'
import { EditableLabel, CardList } from '../../molecules'
import { Droppable } from 'react-beautiful-dnd'
export interface ColumnProps {
  title?: string
  cards?: string[]
  id: string
}

export const Column = ({ title, cards = undefined, id }: ColumnProps) => (
  <div className="w-columnSize shadow-md first:ml-0 ml-2">
    <EditableLabel
      initialText={title}
      containerClasses={'bg-primary text-white'}
    />
    <Droppable droppableId={id}>
      {(provided) => (
        <CardList
          innerRef={provided.innerRef}
          {...provided.droppableProps}
          classes={'p-2 bg-primary'}
          texts={cards}>
          {provided.placeholder}
        </CardList>
      )}
    </Droppable>
  </div>
)
