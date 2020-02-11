import { set, get, keys, Store } from "idb-keyval";

export default class DBInterface<I extends {}> {
  store: any;

  constructor(store) {
    this.store = store;
  }

  async save(key: string, value: I): Promise<I> {
    try {
      await set(key, value, this.store);
      return value;
    } catch (error) {
      console.warn(error);
    }
    return value;
  }

  public async get(id): Promise<I> {
    return await get(id, this.store);
  }

  public async keys(): Promise<IDBValidKey[]> {
    return await keys(this.store);
  }

  public async getAll(): Promise<I[]> {
    try {
      const savedKeys = await keys(this.store);
      const valuesPromises = savedKeys.map(id => this.get(id));
      const values = await Promise.all(valuesPromises);
      return values;
    } catch (error) {
      console.warn(error);
    }
    return [];
  }

  // async getStore(): Promise<Record<string, I>> {
  //     try {
  //         const savedKeys = await keys(this.store);
  //         const keyedPromises = savedKeys.reduce((all, id: any) => {
  //             all[id] = this.get(id);
  //             return all;
  //         }, {});
  //         const keyedValues = await Promise.all(Object.values(keyedPromises));
  //         return keyedValues;
  //     } catch (error) {
  //         console.warn(error);
  //     }
  //     return {}
  // }
}
