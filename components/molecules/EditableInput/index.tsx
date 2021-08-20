import { Label } from "../../atoms/Label"
import React, { useState } from "react"

export interface editableInputProps {
  initialText: string
}

export const EditableInput = ({initialText=""}: editableInputProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)

  return (
    <div className={"cursor-pointer"} >
      {
        isEditing ? 
        <input 
          onBlur={() => 
          setIsEditing(false)} 
          value={text} 
          autoFocus
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event?.currentTarget.value)} />
        : <Label text={text} onClickHandler={() => setIsEditing(true)} />  
      }
    </div>
  )
}