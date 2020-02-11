import LinksCollectionDB from "../db/LinksCollectionDB";
import LinksDB from "../db/LinksDB";
import {id} from './Util';
import Links from './Links';


export default class LinksCollection {

    static async loadJSON(id): Promise<Global.ILinksCollectionJSON> {
        return await new LinksCollectionDB().get(id);
    }

    static async loadInterface(id): Promise<Global.ILinksCollection> {
        const linksJSON = await LinksCollection.loadJSON(id);
        const {collectionIds, label} = linksJSON;
        const collection = await Promise.all(collectionIds.map((id) => Links.loadInterface(id)))
    
        return { 
            id,
            label,
            collection
        }
    }

    static async loadLocal(): Promise<LinksCollection> {
        const collectionIds= await new LinksDB().keys();
        const collection = await Promise.all(collectionIds.map((id) => Links.loadInterface(id)))
        return new LinksCollection({
            id: id(),
            label: 'Local Links',
            collection
        });
      }

    private collection: Links[];
    private label: string;
    private id: string;

    constructor(data : Global.ILinksCollection) {
        this.label = data.label;
        this.collection = data.collection.map((links) => new Links(links))
        this.id = data.id;
    }

    getLabel(): string {
        return this.label;
    }

    getCollection(): Global.ILinks[] {
        return this.collection.map((links) => {
            return links.toInterface()
        });
    }

}