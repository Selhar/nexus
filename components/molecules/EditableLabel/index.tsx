import { Label } from "../../atoms/Label"
import React, { useState } from "react"
import "./style.css"

export interface EditableLabelProps {
  initialText?: string
  classes?: string
}

export const EditableLabel = ({initialText="", classes=""}: EditableLabelProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)

  return (
    <div 
      onClick={() => {setIsEditing(true)}} 
      className={"cursor-pointer p-2 bg-primary text-primary align-middle" + classes } >
      {
        isEditing ? 
        <textarea 
          onBlur={() => 
          setIsEditing(false)} 
          value={text} 
          maxLength={150}
          rows={1}
          autoFocus
          className={"outline-none w-full bg-primary text-primary"}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setText(event?.currentTarget.value)} />
        : <Label text={text} onClickHandler={() => setIsEditing(true)} />  
      }
    </div>
  )
}