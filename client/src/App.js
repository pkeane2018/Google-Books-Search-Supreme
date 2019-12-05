import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <br />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
