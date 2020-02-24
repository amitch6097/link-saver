import React from "react";

import HomeStore, {
  IHomeStoreState,
  IHomeStoreActions
} from "../stores/HomeStore";

import NavigationStore from "../stores/NavigationStore";

import { LinksCardList } from "../components/LinksCardList";
import {
  subscribe,
  unsubscribe,
  callAction,
  getState
} from "simple-object-state";

export class Home extends React.Component<any, IHomeStoreState> {
  constructor(props) {
    super(props);
    //@ts-ignore
    subscribe(HomeStore, this.setState.bind(this));
    this.state = getState(HomeStore) || {} as any;
  }

  componentDidMount() {}

  componentWillUnmount() {
    //@ts-ignore
    unsubscribe(HomeStore, this.setState);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Home
        <LinksCardList
          label={this.state.label}
          links={this.state.collection}
          withAdd={true}
          LinksCardConfig={{
            withRemove: true,
            withEdit: true,
            withClick: false
          }}
          onAdd={() => callAction(NavigationStore, "goLinks")}
          onClickCard={(linkId) => callAction(NavigationStore, "goLinks", linkId)}
        />
        <div>Search</div>
        <div>Popular</div>
        <div>New</div>
        <LinksCardList
          withAdd={false}
          label={"Hot Links Collections"}
          links={this.state.collection}
          LinksCardConfig={{
            withRemove: false,
            withEdit: false,
            withClick: true
          }}
        />
      </div>
    );
  }
}
