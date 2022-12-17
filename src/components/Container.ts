export class Container {
  // Queried by parent to create markup
  public static template = `<div>Hello, \${name}</div>`;

  // Called by parent to create model
  public static create(state: { name: string }): Container {
    console.log("state: ", state);
    return new Container(state.name);
  }

  public constructor(public name: string) {
    console.log(name);
  }
}
