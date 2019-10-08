const initState = {
  isLoading: true,
  datas: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVE':
      const favorites = state.datas.filter(fave => fave === action.payload);
      if (favorites.length > 0) {
        const newFavorites = state.datas.filter(
          fave => fave !== action.payload,
        );
        return {...state, datas: newFavorites};
      } else {
        return {...state, datas: [...state.datas, action.payload]};
      }
    default:
      return state;
  }
};
