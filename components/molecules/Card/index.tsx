import React from "react";
import classNames from "classnames";

import { Box } from "../../atoms/";
import { EditableLabel } from "../EditableLabel";

export interface CardProps {
  text?: string;
  classes?: string;
  id: string;
  index: number;
}

export const Card = ({ text = "", classes, id, index }: CardProps) => {
  return (
    <Box classes={classNames("", classes)}>
      <EditableLabel initialText={text} />
    </Box>
  );
};
