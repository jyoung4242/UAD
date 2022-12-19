interface IHeaderState {
  text: string;
}

export default class Header {
  // Queried by parent to create markup
  public static template = `<div class="header">\${state.text}</div>`;

  // Called by parent to create model
  public static create(state: IHeaderState): Header {
    return new Header(state);
  }

  public constructor(public state: IHeaderState) {}
}
