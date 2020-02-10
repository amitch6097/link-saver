import { Store } from "idb-keyval";

const LinksDBStore = new Store("sndrew-links-db", "sndrew-links-store");
export { LinksDBStore };
