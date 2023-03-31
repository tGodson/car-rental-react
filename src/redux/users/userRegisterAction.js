import axios from 'axios';
import {
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
} from './userTypes';

export const userRegisterRequest = () => ({
  type: REGISTER_REQUEST,
});

export const userRegisterSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const userRegisterFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const registerUser = data => function (dispatch) {
  dispatch(userRegisterRequest());
  axios
    .post('/register', data)
    .then(response => {
      const { data } = response;
      dispatch(userRegisterSuccess(data));
      window.location.href = '/cars';
    })
    .catch(error => {
      dispatch(userRegisterFailure(error.response.data.error));
    });
};
