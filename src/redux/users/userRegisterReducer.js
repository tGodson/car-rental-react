import {
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
} from './userTypes';

const initialState = {
  loading: false,
  login: false,
  user: {},
  token: localStorage.getItem('CarRentalsToken'),
  username: '' || localStorage.getItem('CarRentalsUser'),
  error: '',
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        user: action.payload,
        token: localStorage.setItem('CarRentalsToken', action.payload.token),
        username: localStorage.setItem('CarRentalsUser', action.payload.username),
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        login: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userRegisterReducer;
