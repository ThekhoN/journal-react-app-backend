import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import rootReducer from '../reducers';

// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();
// const middleware = routerMiddleware(history);

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const configureStore = preloadedState => {
  // const store = createStore(
  //   rootReducer,
  //   preloadedState,
  //   applyMiddleware(thunk)
  // );
  const store = createStore(rootReducer, preloadedState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
