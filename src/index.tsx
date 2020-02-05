import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles.scss";
import { LinkList } from "./pages/LinkList";

import { Route, Link, Router } from "react-router-dom";

import NavigationStore from "./stores/NavigationStore";
import history from "./history";
import { register, unregister } from "simple-object-state";

function App() {
  React.useEffect(() => {
    register(NavigationStore);
    return () => {
      unregister(NavigationStore);
    };
  }, []);
  console.log("App");

  return (
    <Router history={history}>
      <Route exact path="/" component={LinkList} />
      {/* <Route path="/home" component={Home} /> */}
      {/* <Route path="/bookmarks/:bookmarkListId" component={BookMarks} /> */}
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
