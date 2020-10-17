import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigate from "./Components/Navbar";
import MovieApp from "./Components/MovieApp";
import Home from "./Components/Home";
import Trailer from "./Components/Trailer";

function App() {
  return (
    <Switch>
      <div className="App">
        <Navigate />
        <Route exact path="/" component={Home} />
        <Route exact path="/movieapp" component={MovieApp} />
        <Route exact path="/movieapp/:id" component={Trailer} />
      </div>
    </Switch>
  );
}
export default App;
