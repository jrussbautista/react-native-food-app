import {db} from '../../firebase';
import * as types from './categories.types';

export const fetchCategories = () => async dispatch => {
  try {
    dispatch({type: types.FETCH_CATEG_START});
    const query = db.collection('categories');
    const snapshot = await query.get();
    const categories = snapshot.docs.map(category => {
      return {
        id: category.id,
        ...category.data(),
      };
    });
    dispatch({type: types.FETCH_CATEG_SUCCESS, payload: categories});
    dispatch({type: types.FETCH_CATEG_END});
  } catch (error) {
    dispatch({type: types.FETCH_CATEG_END});
    throw new Error('Something went wrong');
  }
};
