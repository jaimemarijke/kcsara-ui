import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    Route,
    Router,
    browserHistory,
} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import LandingPage from './components/LandingPage';
import '../scss/global.scss';


const SiteRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
    </Router>
);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(() => {}, {}, window.devToolsExtension && window.devToolsExtension());

const App = (
  <Provider store={store}>
    <SiteRouter />
  </Provider>
);


ReactDOM.render(
  App,
  document.getElementById('render-target')
);
