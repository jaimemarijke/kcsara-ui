import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    Route,
    BrowserRouter,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import MembersPage from './components/MembersPage';
import PrimaryNavigation from './components/PrimaryNavigation';
import '../scss/global.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const Navigation = () => (
    <MuiThemeProvider>
        <div> Testing </div>
    </MuiThemeProvider>
)

const SiteRouter = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <div>
                <Route path="/" component={PrimaryNavigation} />
                <Route path="/members" component={MembersPage} />
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
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
