import { Store, register } from "simple-object-state";
import history from "../history";

export interface INavigationStoreState {}
export interface INavigationStoreActions {}


export default class NavigationStore extends Store<INavigationStoreState, INavigationStoreActions> {
  protected state: INavigationStoreState;

  constructor() {
    super();
    this.state = {};
  }

  private goTo(href: string) {
    history.push(href);
  }
}

register(NavigationStore)
