import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

export {store, persistor};
