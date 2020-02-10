import React, { useEffect, useState } from "react";
import {
  subscribe,
  unsubscribe,
  callAction,
  createStore,
  destroyStore
} from "simple-object-state";
import NavigationStore, {INavigationStoreActions} from "../stores/NavigationStore";

const callActionOnStore = (action) => (...args) => callAction(NavigationStore, action, args)

export default function useNavigation(): INavigationStoreActions {
  return {
    goHome: callActionOnStore('goHome'),
    goLinks: callActionOnStore('goLinks'),
  };
}
