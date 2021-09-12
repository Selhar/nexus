import { EditableLabel } from '../../molecules/EditableLabel'
export interface ColumnProps {
  title?: string
  children?: React.ReactNode
}

export const Column = ({ title, children }: ColumnProps) => (
  <div className="w-columnSize rounded-sm pb-3 border-2 border-primary">
    <EditableLabel
      initialText={title}
      containerClasses={'bg-primary text-primary'}
    />
    {children}
  </div>
)
