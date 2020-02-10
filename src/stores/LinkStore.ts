import { Store, register } from "simple-object-state";
import Links from "../lib/Links";

export interface ILinkStoreState {
  links: Global.ILink[];
  label: string;
}

export interface ILinkStoreActions {
    setLabel: (labe: string) => void;
    setLinkLink: (index: number, link: string)=> void;
    setLinkLabel: (index: number, label: string) => void;
    add: (index: number) => void;
    remove: (index: number) => void;
}

export default class LinkStore extends Store<ILinkStoreState, ILinkStoreActions> {
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

    this.actions = {
        setLabel: this.setLabel,
        setLinkLink: this.links.setLink,
        setLinkLabel: this.links.setLabel,
        add: this.links.add,
        remove: this.links.remove
    }
  }

  storeDidCallAction = (action: string) => {
    switch(action) {
         case 'setLinkLink': 
         case 'setLinkLabel': 
         case 'add': 
         case 'remove': 
            this.setState({
                links: this.links.getLinks()
            });
        default: 
            return;
    }
  }

  setLabel = (label: string) => {
    this.setState({
      label
    });
  };
}

register(LinkStore)
