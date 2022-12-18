import Button from "./Button";
import Display from "./display";

export default class Container {
  // Queried by parent to create markup
  public static template = `
  <div class="UI">
    <p>Welcome \${name}</p>
    <\${Display === myDisplay}>
    <div class="buttonFlex">
      <\${Button === Button1}>
      <\${Button === Button2}>
    </div>
    
  </div>`;

  private Button = Button;
  private Display = Display;

  private Button1 = {
    text: "Inc",
    click: () => {
      let localNum = parseInt(this.myDisplay.text);
      console.log("pre change: ", localNum);
      localNum += 1;
      this.myDisplay.text = localNum.toString();
      console.log("after change: ", this.myDisplay.text);
    },
  };

  private Button2 = {
    text: "Dec",
    click: () => {
      let localNum = parseInt(this.myDisplay.text);
      console.log("pre change: ", localNum);
      if (localNum > 0) localNum -= 1;
      this.myDisplay.text = localNum.toString();
      console.log("after change: ", this.myDisplay.text);
    },
  };

  private myDisplay = {
    text: "0",
  };

  // Called by parent to create model
  public static create(state: { name: string; self: any }): Container {
    console.log("container state: ", state);
    return new Container(state.name, state.self);
  }

  public constructor(public name: string, public self: any) {
    console.log("container constructor: ", name);
  }
}
