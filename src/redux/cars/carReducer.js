import {
  FETCH_CARS_SUCCESS, FETCH_CARS_REQUEST, FETCH_CARS_FAILURE,
} from './carTypes';

const initialState = {
  loading: false,
  cars: [],
  error: '',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: '',
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
