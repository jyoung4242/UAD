export default class Display {
  // Queried by parent to create markup
  public static template = `<input class="myInput" type='number' \${value<==text} disabled />`;

  // Called by parent to create model
  public static create(state: { text: string }): Display {
    console.log("Input state", state);
    return new Display(state.text);
  }

  public constructor(public text: string) {
    console.log("input constructor", text);
  }
}
