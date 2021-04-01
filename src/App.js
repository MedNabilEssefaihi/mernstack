import React from "react";
//style
import "bootstrap/dist/css/bootstrap.min.css";
//APIs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import NavBar from "./components/global/navBar";
// component About user page
import Users from "./components/users/users";
import AddUser from "./components/users/addUser";
import UserById from "./components/users/userById";
// component About rapport page
import Rapports from "./components/rapports/rapports";
import AddRapport from "./components/rapports/addRapport";
import RapportById from "./components/rapports/rapportById";

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* About User */}
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/:id" component={UserById} />
          {/* other path */}
          <Route exact path="/rapports" component={Rapports} />
          <Route exact path="/rapports/add" component={AddRapport} />
          <Route exact path="/rapports/:id" component={RapportById} />
          {/* 404  */}
          <Route path="/" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

const Home = () => {
  return <div>I am home</div>;
};

const Error404 = () => {
  return <div>404</div>;
};

export default App;
