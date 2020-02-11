import React, { useEffect, useState } from "react";
import {
  subscribe,
  unsubscribe,
  callAction,
  getState
} from "simple-object-state";
import LinkStore, { ILinkStoreState, ILinkStoreActions } from "../stores/LinkStore";

const callActionOnLinkStore = (action) => (...args) => callAction(LinkStore, action, args)

export default function useLinks(): ILinkStoreState & ILinkStoreActions {
  const [state, setState] = useState(LinkStore.InitialState);

  useEffect(() => {
    subscribe(LinkStore, setState);
    const state = getState<LinkStore, ILinkStoreState, ILinkStoreActions>(LinkStore) as ILinkStoreState
    setState({
        ...state
    });
    return () => unsubscribe(LinkStore, setState);
  }, [setState]);


  return {
    ...state,
    save: callActionOnLinkStore('save'),
    add: callActionOnLinkStore('add'),
    remove: callActionOnLinkStore('remove'),
    setLabel: callActionOnLinkStore('setLabel'),
    setLinkLink: callActionOnLinkStore('setLinkLink'),
    setLinkLabel: callActionOnLinkStore('setLinkLabel'),
  };
}
