import React, { useEffect, useState } from "react";
import {
  subscribe,
  unsubscribe,
  callAction
} from "simple-object-state";
import LinkStore, { ILinkStoreState } from "../stores/LinkStore";

const callActionOnLinkStore = (action) => (...args) => callAction(LinkStore, action, args)

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


  return {
    ...state,
    add: callActionOnLinkStore('add'),
    remove: callActionOnLinkStore('remove'),
    setLabel: callActionOnLinkStore('setLabel'),
    setLinkLink: callActionOnLinkStore('setLinkLink'),
    setLinkLabel: callActionOnLinkStore('setLinkLabel'),
  };
}
