import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './style/main.less';
import Home from './home';
import LoadableWelcome from './loadable-welcome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import countReducer from './redux/count.reducer';

let store = createStore(countReducer);

export default function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello">Hello World!</Link>
            </li>
            <li>
              <Link to="/old-match">Old Match, to be redirected</Link>
            </li>
            <li>
              <Link to="/will-match">Will Match</Link>
            </li>
            <li>
              <Link to="/will-not-match">Will Not Match</Link>
            </li>
            <li>
              <Link to="/also/will/not/match">Also Will Not Match</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/hello">
              <LoadableWelcome />
            </Route>
            <Route path="/old-match">
              <Redirect to="/will-match" />
            </Route>
            <Route path="/will-match">
              <WillMatch />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function WillMatch() {
  return <h3>Matched!</h3>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
