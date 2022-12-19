import Button from "./Button";
import Display from "./display";
import NavBar from "./navbar";

interface IContainerState {
  name: string;
}

export default class Container {
  localNum: number = 0;
  // Queried by parent to create markup
  public static template = `
  <div class="UI">
    <\${NavBar === nabState}>
    <div class="header">header</div>
    <div class="content">content</div>
  </div>`;

  private NavBar = NavBar;
  private nabState = {
    text: "navbar",
  };

  // Called by parent to create model
  public static create(state: IContainerState): Container {
    return new Container(state.name, state);
  }

  public constructor(public name: string, public state: IContainerState) {}
}
