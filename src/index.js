import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import BreakpointContextProvider from './context/breakpoint-context';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

import sparePartsReducer from './store/reducers/spareParts';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  spareParts: sparePartsReducer
  
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const queries = {
  xs: '(max-width: 600px)',
  sm: '(max-width: 960px)',
  md: '(max-width: 1280px)',
  lg: '(max-width: 1919px)',
  or: '(orientation: portrait)', // we can check orientation also
}

ReactDOM.render(
  <React.StrictMode>  
    <Provider store={store}>   
        <BreakpointContextProvider queries={queries}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BreakpointContextProvider> 
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
