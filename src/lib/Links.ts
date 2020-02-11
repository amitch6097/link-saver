import LinksDB from "../db/LinksDB";
import Link from "./Link";
import { id } from "./Util";

export default class Links {

  static create(): Links {
    return new Links({
      id: id(),
      label: "New Links List",
      links: []
    });
  }

  static async loadJSON(id): Promise<Global.ILinksJSON> {
    return await new LinksDB().get(id);
  }

  static async loadInterface(id): Promise<Global.ILinks> {
    const linksJSON = await Links.loadJSON(id);
    const {linkIds, label} = linksJSON;
    const links = await Promise.all(linkIds.map((id) => Link.loadInterface(id)))

    return { 
        id,
        label,
        links
    }
  }

  static async load(id): Promise<Links> {
    const links =  await Links.loadInterface(id);
    return new Links({
        ...links
    });
  }

  private links: Link[];
  private label: string;
  private id: string;

  constructor(data: Global.ILinks) {
    this.label = data.label;
    this.id = data.id;
    this.links = data.links && data.links.length ? data.links.map(link => new Link(link)) : [new Link()];
  }

  public getLinks(): Global.ILink[]{
      return this.links.map((link) => link.toInterface());
  }

  public getLabel() {
      return this.label;
  }

  public setLabel(label: string) {
      this.label = label;
  }

  public toJSON() {
      const linkIds = this.links.map((link) => link.getId())
      return { 
        linkIds,
        id: this.id,
        label: this.label
      }
  }

  public toInterface(): Global.ILinks {
    const links = this.links.map((link) => link.toInterface())
    return { 
    links,
      id: this.id,
      label: this.label
    }
  }

  public async save() {
    await new LinksDB().save(this.id, this.toJSON());
  }

  public setLink(index: number, link: string) {
    this.links[index].setLink(link);
    this.links = [...this.links];
  }

  public setLinkLabel(index: number, label: string) {
    this.links[index].setLabel(label);
    this.links = [...this.links];
  }

  public add(index: number) {
    const newLInk = new Link();
    let linksCopy: Link[] = [...this.links];
    let nextLinks: Link[] = [];
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
