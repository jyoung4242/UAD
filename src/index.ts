import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import Container from "./components/Container";

const template = `
    <\${Container === greet}>
`;

const model = {
  Container,
  greet: { name: "Mookie" },
};

UI.create(document.body, template, model);
UI.initialize(1000 / 60);
