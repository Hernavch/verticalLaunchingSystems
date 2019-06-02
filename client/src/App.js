import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Users from "./pages/Users"
import Detail from "./pages/Detail";
import Employer from "./pages/Employer";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ProfileUpdate from "./pages/ProfileUpdate";
import { UserProvider } from "./utils/UserContext";



function App() {
 
  return (
    <UserProvider>
    <Router>
      <div>
        {/* <Nav userLogin={this.state.loggedIn}/> */}
        <Nav/>
        <Switch>
        <Route exact path="/" component={Users}/>
          <Route exact path="/user" component={Users}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/books" component={Books} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/employer" component={Employer}/>
          <Route exact path="/update" component={ProfileUpdate}/>


          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
