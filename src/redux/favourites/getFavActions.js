import axios from 'axios';
import {
  FETCH_FAVORITE_REQUEST, FETCH_FAVORITE_SUCCESS, FETCH_FAVORITE_FAILURE,
} from './favouriteTypes';

export const fetchFavoritesRequest = () => ({
  type: FETCH_FAVORITE_REQUEST,
});

export const fetchFavoritesSuccess = cars => ({
  type: FETCH_FAVORITE_SUCCESS,
  payload: cars,
});

export const fetchFavoritesFailure = error => ({
  type: FETCH_FAVORITE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchFavourites = () => function (dispatch) {
  dispatch(fetchFavoritesRequest());
  axios
    .get('/favourites', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchFavoritesSuccess(data));
    })
    .catch(error => {
      dispatch(fetchFavoritesFailure(error.response.data.error));
    });
};
