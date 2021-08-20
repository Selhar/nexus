export interface labelProps {
  text: string,
  onClickHandler?: () => void
}

export const Label = ({text, onClickHandler}: labelProps) => (
  <h4 onClick={onClickHandler} 
      className={"cursor-pointer w-full h-5 "}>
    {text}
  </h4>
)