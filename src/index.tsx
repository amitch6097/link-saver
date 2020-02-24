import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles.scss";
import { LinkListPage } from "./pages/LinkListPage";
import { Home } from "./pages/Home";

import { Route, Link, Router } from "react-router-dom";

import NavigationStore from "./stores/NavigationStore";
import history from "./history";
import {
  register,
  unregister,
  createStore,
  destroyStore
} from "simple-object-state";

function App() {
  React.useEffect(() => {
    createStore(NavigationStore);
    return () => destroyStore(NavigationStore);
  }, []);
  console.log("App");

  return (
    <Router history={history}>
      <Route exact path="/links/:linkId" component={LinkListPage} />
      <Route exact path="/links" component={LinkListPage} />
      <Route exact path="/" component={Home} />

      {/* <Route path="/bookmarks/:bookmarkListId" component={BookMarks} /> */}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
