import React, { useState } from 'react'
import classNames from 'classnames'

import { Label } from '../../atoms/Label'

export interface EditableLabelProps {
  initialText?: string
  inputClasses?: string
  labelClasses?: string
  containerClasses?: string
}

export const EditableLabel = ({
  initialText = '',
  labelClasses = '',
  inputClasses = '',
  containerClasses = ''
}: EditableLabelProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)

  return (
    <div
      onClick={() => {
        setIsEditing(true)
      }}
      className={classNames('cursor-pointer p-1', containerClasses)}>
      {isEditing ? (
        <textarea
          onBlur={() => setIsEditing(false)}
          value={text}
          maxLength={150}
          autoFocus
          className={classNames('outline-none w-full h-auto', inputClasses)}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(event?.currentTarget.value)
          }
        />
      ) : (
        <Label
          text={text}
          onClickHandler={() => setIsEditing(true)}
          classes={labelClasses}
        />
      )}
    </div>
  )
}
