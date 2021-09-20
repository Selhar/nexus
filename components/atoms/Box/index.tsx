import classNames from "classnames";

export interface boxProps {
  classes?: string;
  children?: React.ReactNode;
  innerRef?: any;
}

export const Box = ({ children, classes = "", innerRef }: boxProps) => (
  <div ref={innerRef} className={classNames("", classes)}>
    {children}
  </div>
);
