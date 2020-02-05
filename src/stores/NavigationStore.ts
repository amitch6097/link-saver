import { Store } from "simple-object-state";
import history from "../history";

export interface INavigationStoreState {}

export default class NavigationStore extends Store<INavigationStoreState> {
  protected state: INavigationStoreState;

  constructor() {
    super();
    this.state = {};
  }

  private goTo(href: string) {
    history.push(href);
  }
}
