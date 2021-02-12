import { combineReducers } from 'redux';
import carItemReducer from './carItem/carItemReducer';
import carReducer from './cars/carReducer';
import userReducer from './users/userReducer';
import userRegisterReducer from './users/userRegisterReducer';
import favouriteReducer from './favourites/favouriteReducer';
import getFavReducer from './favourites/getFavReducer';

const rootReducer = combineReducers({
  cars: carReducer,
  carItem: carItemReducer,
  user: userReducer,
  signup: userRegisterReducer,
  favourites: favouriteReducer,
  getFavs: getFavReducer,
});

export default rootReducer;
