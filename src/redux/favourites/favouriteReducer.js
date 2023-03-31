import * as fav from './favouriteTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case fav.ADD_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fav.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case fav.ADD_FAVORITE_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    case fav.REMOVE_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fav.REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };
    case fav.REMOVE_FAVORITE_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
