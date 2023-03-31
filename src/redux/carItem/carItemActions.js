import axios from 'axios';
import {
  FETCH_CAR_ITEM_REQUEST, FETCH_CAR_ITEM_SUCCESS, FETCH_CAR_ITEM_FAILURE,
} from '../cars/carTypes';

export const fetchCarItemRequest = () => ({
  type: FETCH_CAR_ITEM_REQUEST,
});

export const fetchCarItemSuccess = cars => ({
  type: FETCH_CAR_ITEM_SUCCESS,
  payload: cars,
});

export const fetchCarItemFailure = error => ({
  type: FETCH_CAR_ITEM_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchCarItem = id => function (dispatch) {
  dispatch(fetchCarItemRequest());
  axios
    .get(`/cars/${id}`, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchCarItemSuccess(data));
    })
    .catch(error => {
      dispatch(fetchCarItemFailure(error.response.data.error));
    });
};
