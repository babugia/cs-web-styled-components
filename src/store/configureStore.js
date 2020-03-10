import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {
  const middleware = applyMiddleware(thunk);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(middleware));
};

export default configureStore;
