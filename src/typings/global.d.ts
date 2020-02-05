export = Global;
export as namespace Global;

declare namespace Global {
  export interface ILink {
    label: string;
    link: string;
    id: string;
  }
}
