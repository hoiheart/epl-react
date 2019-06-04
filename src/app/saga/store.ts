import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { initState } from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware) => composeWithDevTools(applyMiddleware(...middleware));

interface IExtendStore extends Store {
  sagaTask?: any;
}

function configureStore(initialState: {} = initState) {
  const sagaMiddleware = createSagaMiddleware();
  const store: IExtendStore = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
