export default class Button {
  // Queried by parent to create markup
  public static template = `<button class="myButton" \${click@=>click}>\${text}</button>`;

  // Called by parent to create model
  public static create(state: { text: string; click: Function }): Button {
    console.log("button state", state);
    return new Button(state.text, state.click);
  }

  public constructor(public text: string, public click: Function) {
    console.log("button constructor", text, click);
  }
}
