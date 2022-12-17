import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import Container from "./components/Container";
import Button from "./components/Button";

const template = `
    <div class="container">
      <\${ Container === greet}>
    </div>
`;

const model = {
  Container,
  Button,
  greet: {
    name: "Mookie",
    Button1: {
      text: "Inc",
      click: () => {
        console.log("clicked inc");
      },
    },
    Button2: {
      text: "Dec",
      click: () => {
        console.log("clicked dec");
      },
    },
  },
};

UI.create(document.body, template, model);
UI.initialize(1000 / 60);
