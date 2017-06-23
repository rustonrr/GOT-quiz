import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Quiz from "./Quiz";

import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/" component={App} /> 
      <Route path="/quiz" render={() => (
          <Quiz>
            test
            </Quiz>
      )} />

    </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)



/*
  React Router Tree
 	With Three Routes
	<Route path="landing"  component={}/>
	<Route path="quiz" component={}>
		<Route path=":id" component={}/>
	</Route>
	<Route path="results"  component={}/>
*/
