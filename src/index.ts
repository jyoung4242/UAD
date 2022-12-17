import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import { Container } from "./components/Container";

const template = `
    <div class="container">
      <\${ Container === greet}>
    </div>
`;

const model = {
  Container,
  greet: { name: "Mookie" },
  counter: 0,
};

UI.initialize();
UI.create(document.body, template, model);
setInterval(() => model.counter++, 1000);