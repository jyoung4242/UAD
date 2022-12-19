import Button from "./Button";
import Display from "./display";
import NavBar from "./navbar";
import Header from "./Header";

interface IContainerState {
  name: string;
}

export default class Container {
  localNum: number = 0;
  // Queried by parent to create markup
  public static template = `
  <div class="UI">
    <\${NavBar === navState}>
    <\${Header === headerState}>
    <div class="content"></div>
  </div>`;

  private NavBar = NavBar;
  private navState = {
    text: "UAD",
  };
  private Header = Header;
  private headerState = {
    text: "UNIVERSAL ANNOUNCEMENT - DASHBOARD",
  };

  // Called by parent to create model
  public static create(state: IContainerState): Container {
    return new Container(state.name, state);
  }

  public constructor(public name: string, public state: IContainerState) {}
}
