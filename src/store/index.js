import {createStore, combineReducers} from 'redux';
import favorites from './reducers/favorites';

const rootReducer = combineReducers({
  favorites,
});

const store = createStore(rootReducer);

export default store;
