import { Store, register } from "simple-object-state";
import LinksCollection from "../lib/LinksCollection";

export interface IHomeStoreState {
  collection: Global.ILinks[];
  label: string;
  idle: boolean;
}

export interface IHomeStoreActions {
}


export default class HomeStore extends Store<
IHomeStoreState,
  IHomeStoreActions
> {

  static InitialState: IHomeStoreState = {
    idle: true,
    collection: [],
    label: ""
  };

  protected state: IHomeStoreState;
  private collection: LinksCollection | undefined;

  constructor() {
    super();
    this.collection = undefined;
    this.state = HomeStore.InitialState;
    this.loadLocalLinks();
  }

  async loadLocalLinks() {
    this.collection = await LinksCollection.loadLocal();
    this.setState({
        collection: this.collection.getCollection(),
        label: this.collection.getLabel()
    });
  }
}

register(HomeStore);
