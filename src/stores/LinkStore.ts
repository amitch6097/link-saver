import { Store } from "simple-object-state";
import Links from "../lib/Links";

export interface ILinkStoreState {
  links: Global.ILink[];
  label: string;
}

export default class LinkStore extends Store<ILinkStoreState> {
  static InitialState: ILinkStoreState = {
    label: "New Link List",
    links: [
      {
        label: "My Link",
        link: "google.com",
        id: "a"
      }
    ]
  };
  protected state: ILinkStoreState;
  private links: Links;

  constructor() {
    super();
    this.links = new Links(LinkStore.InitialState.links);
    this.state = {
      links: this.links.getLinks(),
      label: LinkStore.InitialState.label
    };
  }

  setLabel = (label: string) => {
    this.setState({
      label
    } as ILinkStoreState);
  };

  setLinkLink = (index: number, link: string) => {
    this.links.setLink(index, link);
    this.setState({
      links: this.links.getLinks()
    } as ILinkStoreState);
  };

  setLinkLabel = (index: number, label: string) => {
    this.links.setLabel(index, label);
    this.setState({
      links: this.links.getLinks()
    } as ILinkStoreState);
  };

  add = (index: number) => {
    this.links.add(index);
    this.setState({
      links: this.links.getLinks()
    } as ILinkStoreState);
  };

  remove = (index: number) => {
    this.links.remove(index);
    this.setState({
      links: this.links.getLinks()
    } as ILinkStoreState);
  };
}
