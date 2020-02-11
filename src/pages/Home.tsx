import React from "react";

import useNavigation from "../hooks/useNavigation";
import HomeStore, {
  IHomeStoreState,
  IHomeStoreActions
} from "../stores/HomeStore";

import NavigationStore, {
  } from "../stores/NavigationStore";


  import {LinksCardList} from '../components/LinksCardList';
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
    this.state = HomeStore.InitialState;
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    //@ts-ignore
    unsubscribe(HomeStore, this.setState);
  }

  render() {
      console.log(this.state)
    return (
      <div>
        Home
        <LinksCardList label={this.state.label} links={this.state.collection} onAdd={() => callAction(NavigationStore, 'goLinks')}/>
        <LinksCardList label={"Hot Links Collections"} links={this.state.collection} withAdd={false} withRemove={false}/>

      </div>
    );
  }
}
