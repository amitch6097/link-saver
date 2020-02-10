import LinkDB from "../db/LinkDB";

const LINK_TEMPLATE: Partial<Global.ILink> = {
  label: "New Link",
  link: "google.com"
};

function id(): string {
  return String(Math.round(Math.random() * 100000000));
}

export default class Links {
  private links: Global.ILink[] = [];
  private id: string;
  private label: string;

  static create(): Links {
    return new Links({});
  }

  static async load(id): Promise<Links> {
    const linksObject: Global.ILinks = await new LinkDB().get(id);
    return new Links(linksObject);
  }

  constructor({ id: linkId, links, label }: Partial<Global.ILinks>) {
    this.id = linkId || id();
    this.links = links || [];
    this.label = label || ''
  }

  public toJSON(): Global.ILinks {
      return {
          id: this.id,
          links: this.links,
          label: this.label
      }
  }

  public async save() {
    await new LinkDB().save(this.id, this.toJSON())
  }

  public getLabel() {
      return this.label;
  }

  public setLabel(label: string) {
      this.label = label;
  }

  public getLinks() {
    return this.links;
  }

  public setLink(index: number, link: string) {
    this.links[index].link = link;
    this.links = [...this.links];
  }

  public setLinkLabel(index: number, label: string) {
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
