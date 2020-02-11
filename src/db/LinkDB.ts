import DBInterface from './DBInterface';
import {LinkDBStore} from './dbs';

export default class LinkDB extends DBInterface<Global.ILinkJSON> {
    static Instance: LinkDB;

    constructor() {
        if(LinkDB.Instance) {
            return LinkDB.Instance;
        } else {
            super(LinkDBStore);
        }
    }
}