import { Store } from "idb-keyval";
const LinksCollectionDBStore = new Store("sndrew-links-collection-db", "sndrew-links-collection-store");
const LinksDBStore = new Store("sndrew-links-db", "sndrew-links-store");
const LinkDBStore = new Store("sndrew-link-db", "sndrew-link-store");

export { LinksDBStore, LinkDBStore, LinksCollectionDBStore };
