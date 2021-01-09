import { Component, Fragment } from "react";
import "./App.css";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Weapons from "./components/weapons/Weapons";
import Ammos from  "./components/ammos/Ammos";
import SingleWeapon from "./components/singleWeapon/SingleWeapon";
import SingleAmmo from "./components/singleAmmo/SingleAmmo";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

class App extends Component {
  state = {
    isAuth: false,
    token: null,
    userId: null,
    authLoading: false,
    error: null,
  }

  componentDidMount() {

  }

  loginHandler = () => {

  }

  signupHandler = () => {

  }

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Login
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Route
          path="/signup"
          exact
          render={(props) => (
            <Signup
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
    if (this.state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/weapons"
            exact
            render={(props) => (
              <Weapons userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/:weaponId"
            render={(props) => (
              <SingleWeapon
                {...props}
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
          <Route
            path="/ammos"
            exact
            render={(props) => (
              <Ammos userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/:ammoId"
            exact
            render={(props) => (
              <SingleAmmo userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <Fragment>
        {this.state.error}
        {routes}
      </Fragment>
    );
  }
}

export default App;
