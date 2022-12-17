import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import { Container } from "./components/Container";

const template = `
    <div class="container">
      <\${Container === greet}>
    </div>
`;

const model = {
  Container,
  greet: { name: "Mookie" },
};

UI.create(document.body, template, model);
UI.initialize(1000 / 60);
