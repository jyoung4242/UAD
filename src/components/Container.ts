import Button from "./Button";

export default class Container {
  // Queried by parent to create markup
  public static template = `
  <div class="test">
    <p>Welcome \${name}</p>
    <\${ Button === Button1}>
    <\${ Button === Button2}>
  </div>`;

  // Called by parent to create model
  public static create(state: { Button: Button; name: string; Button1: object; Button2: object }): Container {
    console.log(state);
    return new Container(state.name, state.Button1, state.Button2, state.Button);
  }

  public constructor(public name: string, Button1: object, Button2: object, Button: Button) {
    console.log(Button, name, Button1, Button2);
  }
}
