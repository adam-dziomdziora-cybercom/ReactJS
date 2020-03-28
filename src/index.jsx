import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './style/main.less';
import Home from './OLD/home';
import LoadableWelcome from './OLD/loadable-welcome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import countReducer from './OLD/redux/count.reducer';
import { fromJS } from 'immutable';
import TopMenu from './OLD/navlink';
import Dashboard from './dashboard';

let store = createStore(countReducer);

const links = fromJS([
  { url: '/', label: 'Dashboard' },
  { url: '/old-home', label: 'Old Home, sweet home' },
  { url: '/hello', label: 'Hello World!' },
  { url: '/old-match', label: 'Old Match, to be redirected' },
  { url: '/will-match', label: 'Will Match' },
  { url: '/will-not-match', label: 'Will Not Match' },
  { url: '/also/will/not/match', label: 'Also Will Not Match' },
  { url: '/old-match', label: 'Old Match, to be redirected' },
]);
export default function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <TopMenu links={links} />

          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/old-home">
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
