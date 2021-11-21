import React, { useState } from "react";
import classNames from "classnames";

import { Label } from "../../atoms/Label";
import styles from "./styles.module.css";

export const EditableLabel = ({
  initialText = "",
  labelClasses = "",
  inputClasses = "",
  containerClasses = "",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  return (
    <div
      onClick={() => {
        setIsEditing(true);
      }}
      className={classNames(styles.container, containerClasses)}
    >
      {isEditing ? (
        <textarea
          onBlur={() => setIsEditing(false)}
          value={text}
          maxLength={150}
          autoFocus
          className={classNames(styles.editable, inputClasses)}
          onChange={(event) =>
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
  );
};