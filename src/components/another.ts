export class Another {
  // Queried by parent to create markup
  public static template = `<div>Another: \${name}</div>`;

  public template = Another.template;
  
  // Called by parent to create model
  public static create(state: any): Another {
    console.log("another: ", state);
    return new Another(state.upperCase);
  }

  public constructor(public name: string) {
    console.log(name);
  }
}
