interface IContentSTate {
  text: string;
}

export default class Content {
  // Queried by parent to create markup
  public static template = `<div class="content">\${state.text}</div>`;

  // Called by parent to create model
  public static create(state: IContentSTate): Content {
    return new Content(state);
  }

  public constructor(public state: IContentSTate) {}
}
