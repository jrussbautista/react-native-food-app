import * as types from './categories.types';

const initialState = {
  isLoading: true,
  datas: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEG_START:
      return {...state, isLoading: true};
    case types.FETCH_CATEG_SUCCESS:
      return {...state, datas: action.payload};
    case types.FETCH_CATEG_END:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
