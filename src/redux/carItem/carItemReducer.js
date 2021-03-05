import {
  FETCH_CAR_ITEM_REQUEST, FETCH_CAR_ITEM_SUCCESS, FETCH_CAR_ITEM_FAILURE,
} from '../cars/carTypes';

const initialState = {
  loading: false,
  car: {},
  error: '',
};

const carItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CAR_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload,
        error: '',
      };
    case FETCH_CAR_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        car: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carItemReducer;
