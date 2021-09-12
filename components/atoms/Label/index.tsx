import classNames from 'classnames'
export interface labelProps {
  text: string
  onClickHandler?: () => void
  classes?: string
}

export const Label = ({ text, onClickHandler, classes = '' }: labelProps) => (
  <span
    onClick={onClickHandler}
    className={classNames('cursor-pointer w-max select-none', classes)}>
    {text}
  </span>
)
