import {AsyncStorage} from 'react-native';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import favorites from './favorites/favorites.reducer';
import categories from './categories/categories.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  favorites,
  categories,
});

export default persistReducer(persistConfig, rootReducer);
