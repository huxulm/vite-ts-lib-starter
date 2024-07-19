import { FC } from "react";
interface ButtonProps {
  color: string;
}
export const Button: FC<ButtonProps> = ({ color }) => {
  return <div style={{ color }}>Button</div>;
};
