import { id } from "./Util";
import LinkDB from "../db/LinkDB";

export default class Link {
    static async loadJSON(id): Promise<Global.ILinkJSON> {   
        return await new LinkDB().get(id);
    }

    static async loadInterface(id): Promise<Global.ILink> {   
        return await Link.loadJSON(id)
    }

    static async load(id): Promise<Link> {   
        const link = await Link.loadInterface(id);
        return new Link(link);
    }


    private link: string;
    private label: string;
    private id: string;

    constructor(data?: Global.ILink) {
        data = data || createDefaultLink();
        this.label = data.label;
        this.link = data.link;
        this.id = data.id;
    }

    public toJSON(): Global.ILinkJSON{
        return  {
            label: this.label,
            link: this.link,
            id: this.id
        }
    }

    public toInterface(): Global.ILink {
        return this.toJSON();
    }

    public async save() {
        await new LinkDB().save(this.id, this.toJSON())
    }

    setLink(link: string) {
        this.link = link;
    }

    setLabel(label: string) {
        this.label = label;
    }

    getLink() {
        return this.link;
    }

    getLabel() {
        return this.label;
    }

    getId() {
        return this.id;
    }
}

export function createDefaultLink(): Global.ILink {
    return {
        label: "New Link",
        link: "google.com",
        id: id()
    }
}