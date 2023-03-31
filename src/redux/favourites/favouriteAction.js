import axios from 'axios';
import {
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAILURE,
  REMOVE_FAVORITE_REQUEST,
} from './favouriteTypes';

export const addFavoritesRequest = () => ({
  type: ADD_FAVORITE_REQUEST,
});

export const addFavoritesSuccess = message => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: message,
});

export const addFavoritesFailure = error => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

export const removeFavoritesRequest = () => ({
  type: REMOVE_FAVORITE_REQUEST,
});

export const removeFavoritesSuccess = message => ({
  type: REMOVE_FAVORITE_SUCCESS,
  payload: message,
});

export const removeFavoritesFailure = error => ({
  type: REMOVE_FAVORITE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addFavourites = data => function (dispatch) {
  dispatch(addFavoritesRequest());
  axios
    .post('/favourites', data)
    .then(response => {
      const { data } = response;
      dispatch(addFavoritesSuccess(data.message));
    })
    .catch(error => {
      dispatch(addFavoritesFailure(error.response.data.error));
    });
};

// eslint-disable-next-line func-names
export const removeFavourites = id => function (dispatch) {
  dispatch(removeFavoritesRequest());
  axios
    .delete(`/favourites/${id}`)
    .then(response => {
      const { data } = response;
      dispatch(removeFavoritesSuccess(data.message));
    })
    .catch(error => {
      dispatch(removeFavoritesFailure(error.response.data.message));
    });
};
