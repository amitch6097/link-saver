import React, { useEffect, useState } from "react";
import {
  register,
  subscribe,
  unsubscribe,
  unregister,
  getStore
} from "simple-object-state";
import LinkStore, { ILinkStoreState } from "../stores/LinkStore";
register(LinkStore);

export default function useLinks(): ILinkStoreState & {
  add: (index: number) => void;
  remove: (index: number) => void;
  setLinkLabel: (index: number, label: string) => void;
  setLinkLink: (index: number, link: string) => void;
  setLabel: (label: string) => void;
} {
  const [state, setState] = useState(LinkStore.InitialState);

  useEffect(() => {
    subscribe(LinkStore, setState);
    return () => unsubscribe(LinkStore, setState);
  }, [setState]);

  const store = getStore(LinkStore) as any;
  const add = store && store.add;
  const remove = store && store.remove;
  const setLabel = store && store.setLabel;
  const setLinkLink = store && store.setLinkLink;
  const setLinkLabel = store && store.setLinkLabel;

  return {
    ...state,
    add,
    remove,
    setLabel,
    setLinkLink,
    setLinkLabel
  };
}
