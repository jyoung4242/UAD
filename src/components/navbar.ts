interface INavBarState {
  text: string;
}

export default class NavBar {
  // Queried by parent to create markup
  public static template = `<div class="navbar">\${state.text}</div>`;

  // Called by parent to create model
  public static create(state: INavBarState): NavBar {
    return new NavBar(state);
  }

  public constructor(public state: INavBarState) {}
}
