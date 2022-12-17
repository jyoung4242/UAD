import { Another } from "./another";

export class Container {
  // Queried by parent to create markup
  public static template = `<div><div>Hello, \${name}</div>< \${ Another === self }>< \${ anotherAnother === } ></div>`;

  // Called by parent to create model
  public static create(state: { name: string }): Container {
    console.log("state: ", state);
    return new Container(state.name);
  }

  public Another = Another;
  public upperCase;
  public self = this;

  public anotherAnother;

  public constructor(public name: string) {
    console.log(name);
    this.upperCase = name.toUpperCase();
    this.anotherAnother = new Another(name.toLowerCase());
  }
}
