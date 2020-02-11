import DBInterface from './DBInterface';
import {LinksCollectionDBStore} from './dbs';

export default class LinksCollectionDB extends DBInterface<Global.ILinksCollectionJSON> {
    static Instance: LinksCollectionDB;

    constructor() {
        if(LinksCollectionDB.Instance) {
            return LinksCollectionDB.Instance;
        } else {
            super(LinksCollectionDBStore);
        }
    }
}