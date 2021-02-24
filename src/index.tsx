import * as React from "react";
import { render } from "react-dom";

import { demo } from "./styles.module.scss";

if ((module as any).hot) {
  (module as any).hot.accept();
}

render(<div className={demo}>Demo</div>, document.getElementById("root"));
