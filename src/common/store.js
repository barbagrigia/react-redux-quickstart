import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import reducers/index.js
import reducers from '../reducers';

// combine middlewares
const middleware = applyMiddleware(
  promise(), thunk, // to do asynch calls
  logger, // log messages
);

// compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
	reducers, 
	composeEnhancers(middleware)
);

// export
export default store;
