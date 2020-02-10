import DBInterface from './DBInterface';
import {LinksDBStore} from './dbs';

export default class LinkDB extends DBInterface<Global.ILinks> {
    static Instance: LinkDB;

    constructor() {
        if(LinkDB.Instance) {
            return LinkDB.Instance;
        } else {
            super(LinksDBStore);
        }
    }
}