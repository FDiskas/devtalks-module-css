import * as React from "react";
import { button } from "./styles.module.scss";

interface ButtonComponentProperties {
  value: string;
}
export const ButtonComponent: React.FC<ButtonComponentProperties> = ({ value }) => (
  <button type="button" className={button}>
    {value}
  </button>
);
