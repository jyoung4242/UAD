import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import Container from "./components/Container";

const template = `
    <div class="container">
      <\${ Container === greet}>
    </div>
`;

let model = {
  Container,
  greet: {
    name: "Mookie",
  },
};

UI.initialize();
UI.create(document.body, template, model);
