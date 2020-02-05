const LINK_TEMPLATE: Partial<Global.ILink> = {
  label: "New Link",
  link: "google.com"
};

function id(): string {
  return String(Math.round(Math.random() * 100000000));
}

export default class Links {
  private links: Global.ILink[] = [];

  constructor(links: Global.ILink[] = []) {
    this.links = links;
  }

  public getLinks() {
    return this.links;
  }

  public setLink(index: number, link: string) {
    this.links[index].link = link;
    this.links = [...this.links];
  }

  public setLabel(index: number, label: string) {
    this.links[index].label = label;
    this.links = [...this.links];
  }

  public add(index: number) {
    const newLInk = {
      id: id(),
      ...LINK_TEMPLATE
    } as Global.ILink;
    let linksCopy: Global.ILink[] = [...this.links];
    let nextLinks: Global.ILink[] = [];
    while (index !== nextLinks.length) {
      const link = linksCopy.shift();
      if (!link) {
        break;
      }
      nextLinks = [...nextLinks, link];
    }
    nextLinks = [...nextLinks, newLInk, ...linksCopy];
    this.links = nextLinks;
  }

  public remove(index: number) {
    const linksCopy = [...this.links];
    const firstHalf = linksCopy.slice(0, index);
    const secondHalf = linksCopy.slice(index + 1);
    this.links = [...firstHalf, ...secondHalf];
  }
}
