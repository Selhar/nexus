export interface ColumnProps {
  title?: string
  children?: React.ReactNode
}

export const Column = ({
  title,
  children,
}: ColumnProps) => (
  <div className="bg-red-600 text-blue-500">
    <span>{title}</span>
    {children}
  </div>
)
