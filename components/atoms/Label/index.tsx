export interface labelProps {
  text: string,
  onClickHandler?: () => void
}

export const Label = ({text, onClickHandler}: labelProps) => (
  <span onClick={onClickHandler} 
      className={"cursor-pointer w-max"}>
    {text}
  </span>
)