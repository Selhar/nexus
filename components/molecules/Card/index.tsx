import React from 'react'
import classNames from 'classnames'

import { Box } from '../../atoms/'
import { EditableLabel } from '../EditableLabel'
import { Draggable } from 'react-beautiful-dnd'

export interface CardProps {
  text?: string
  classes?: string
  id: string
  index: number
}

export const Card = ({ text = '', classes, id, index }: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          classes={classNames('', classes)}>
          <EditableLabel initialText={text} />
        </Box>
      )}
    </Draggable>
  )
}
