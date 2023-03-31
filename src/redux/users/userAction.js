import axios from 'axios';
import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
} from './userTypes';

export const userLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const userLoginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLoginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const loginUser = data => function (dispatch) {
  dispatch(userLoginRequest());
  axios
    .post('/login', data)
    .then(response => {
      const { data } = response;
      dispatch(userLoginSuccess(data));
      window.location.href = '/cars';
    })
    .catch(error => {
      dispatch(userLoginFailure(error.response.data.error));
    });
};
