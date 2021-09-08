import { EditableLabel } from "../../molecules/EditableLabel";
import "./style.css"
export interface ColumnProps {
  title?: string
  children?: React.ReactNode
}

export const Column = ({
  title,
  children,
}: ColumnProps) => (
  <div className=" columnContainer rounded-sm px-3 pb-3 pt-2 ">
    <EditableLabel initialText={title} classes={""}/>
    {children}
  </div>
)
