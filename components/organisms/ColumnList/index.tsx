import React from 'react'
import { Column, ColumnProps } from '../Column'
import { DragDropContext } from 'react-beautiful-dnd'

export interface ColumnListProps {
  classes?: string
  columns?: ColumnProps[]
}

export const ColumnList = ({ columns = [], classes }: ColumnListProps) => (
  <DragDropContext onDragEnd={(result) => undefined}>
    <div className="flex">
      {columns?.map((column, index) => (
        <Column
          key={(column?.title || '') + index}
          id={(column?.title || '') + index}
          title={column?.title}
          cards={column.cards}
        />
      ))}
    </div>
  </DragDropContext>
)
