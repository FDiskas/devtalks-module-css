/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from "react";
import { render } from "react-dom";
import { ButtonComponent } from "./components/button/button-component";

import { demo } from "./styles.module.scss";

if ((module as any).hot) {
  (module as any).hot.accept();
}

render(
  <div className={demo}>
    <label>
      This is Label
      <ButtonComponent value="Turbo" />
    </label>
  </div>,
  document.querySelector("#root")
);
