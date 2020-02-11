import DBInterface from './DBInterface';
import {LinkDBStore} from './dbs';

export default class LinksDB extends DBInterface<Global.ILinksJSON> {
    static Instance: LinksDB;

    constructor() {
        if(LinksDB.Instance) {
            return LinksDB.Instance;
        } else {
            super(LinkDBStore);
        }
    }
}