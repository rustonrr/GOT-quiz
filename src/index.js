import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Quiz from "./Quiz";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import ResultsPage from "./ResultsPage";

import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App} /> 
            <Route path="/quiz" component={Quiz} />
            <Route path="/quiz2" component={Quiz2} />
            <Route path="/quiz3" component={Quiz3} />
            <Route path="/quiz4" component={Quiz4} />
            <Route path="/quiz5" component={Quiz5} />
            <Route path="/results-page" component={ResultsPage} />

        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)






            // <Switch>
            //   <Route path="/quiz/quiz2" component={Quiz2} />
            //   <Route path="/quiz/quiz3" component={Quiz3} />
            //   <Route path="/quiz/quiz4" component={Quiz4} />
            //   <Route path="/quiz/quiz5" component={Quiz5} />
            // </Switch>

	// <Route path="quiz" component={}>
	// 	<Route path=":id" component={}/>
	// </Route>

/*
  React Router Tree
 	With Three Routes
	<Route path="landing"  component={}/>
	<Route path="quiz" component={}>
		<Route path=":id" component={}/>
	</Route>
	<Route path="results"  component={}/>
*/
