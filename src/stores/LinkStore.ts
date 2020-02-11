import { Store, register } from "simple-object-state";
import Links from "../lib/Links";

export interface ILinkStoreState {
  links: Global.ILink[];
  label?: string;
  idle: boolean;
}

export interface ILinkStoreActions {
  setLabel: (labe: string) => void;
  setLinkLink: (index: number, link: string) => void;
  setLinkLabel: (index: number, label: string) => void;
  add: (index: number) => void;
  remove: (index: number) => void;
  save: () => void;
}

export default class LinkStore extends Store<
  ILinkStoreState,
  ILinkStoreActions
> {
  static InitialState: ILinkStoreState = {
    idle: false,
    links: [],
    label: ""
  };
  protected state: ILinkStoreState;
  private links: Links;

  constructor() {
    super();
    this.links = Links.create();
    this.state = {
      links: this.links.getLinks(),
      label: this.links.getLabel(),
      idle: false
    };

    this.actions = {
      setLabel: this.links.setLabel.bind(this.links),
      setLinkLink: this.links.setLink.bind(this.links),
      setLinkLabel: this.links.setLinkLabel.bind(this.links),
      add: this.links.add.bind(this.links),
      remove: this.links.remove.bind(this.links),
      save: this.onSave
    };
  }

  onSave = async () => {
    this.setState({
      idle: true
    });
    await this.links.save();
    this.setState({
      idle: false
    });
  };

  storeDidCallAction = (action: string) => {
    switch (action) {
      case "setLabel":
        this.setState({
          label: this.links.getLabel()
        });
        break;
      case "setLinkLink":
      case "setLinkLabel":
      case "add":
      case "remove":
        this.setState({
          links: this.links.getLinks()
        });
        break;
      default:
        break;
    }
  };
}

register(LinkStore);
