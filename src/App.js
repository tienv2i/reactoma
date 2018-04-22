import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Loadable from 'react-loadable';
import Loading from 'components/Loading.js';

import Appbar from 'components/Appbar.js';
import 'assets/style.scss';

const Home = Loadable({
	loader: () => import('pages/Home'),
	loading: () => Loading
})
const TodoApp = Loadable({
	loader: () => import('pages/TodoApp'),
	loading: () => Loading
})


const App = () => (
	<div className="app-root">
		<Appbar />
	  <Switch>
	    <Route exact path="/" component={Home} />
	    <Route exact path="/todo" component={TodoApp} />
	  </Switch>
  </div>
);

export default App;
