import { Store, register } from "simple-object-state";
import history from "../history";

export interface INavigationStoreState {}
export interface INavigationStoreActions {
    goHome: () => void;
    goLinks: () => void;
}


export default class NavigationStore extends Store<INavigationStoreState, INavigationStoreActions> {
  protected state: INavigationStoreState;
  protected actions: INavigationStoreActions;

  constructor() {
    super();
    this.state = {};

    this.actions = {
        goHome: () => this.goTo('/'),
        goLinks: (linkId?: string) => this.goTo(linkId ? `/links/${linkId}` : '/links')
    }
  }

  private goTo(href: string) {
    history.push(href);
  }
}

register(NavigationStore)
