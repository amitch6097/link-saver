export = Global;
export as namespace Global;

declare namespace Global {
  export interface ILink {
    label: string;
    link: string;
    id: string;
  }

  export interface ILinkJSON {
    label: string;
    link: string;
    id: string;
  }

  export interface ILinks {
      id: string;
      links: ILink[]
      label: string;
  }

  export interface ILinksJSON {
    id: string;
    linkIds: string[]
    label: string;
}

  export interface ILinksCollection {
      id: string;
      collection: ILinks[],
      label: string;
  }

  export interface ILinksCollectionJSON {
    label: string;
    collectionIds: string[],
    label: string;
}
}
