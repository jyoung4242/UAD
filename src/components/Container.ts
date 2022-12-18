import Button from "./Button";

export default class Container {
  // Queried by parent to create markup
  public static template = `
  <div class="test">
    <p>Welcome \${name}</p>
    <\${ Button === Button1}>
    <\${ Button === Button2}>
  </div>`;

  private Button = Button;

  private Button1 = {
    text: "Inc2",
    click: () => {
      console.log("clicked inc2");
    },
  };
  private Button2 = {
    text: "Dec2",
    click: () => {
      console.log("clicked dec2");
    }
  };

  // Called by parent to create model
  public static create(state: { name: string, self: any }): Container {
    console.log(state);
    return new Container(state.name);
  }

  public constructor(public name: string) {
    console.log(name);
  }
}
