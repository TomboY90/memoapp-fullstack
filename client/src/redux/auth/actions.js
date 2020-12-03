import { apiClient } from 'lib/api';

// Action Types
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILURE = 'AUTH_REGISTER_FAILURE';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';

// Action Creator
export const loginRequest = ({ name, password }) => async dispatch => {
  // Inform Login API is starting
  dispatch({
    type: AUTH_LOGIN
  });

  // API REQUEST
  try {
    const res = await apiClient.get('/user', {name, password});

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: error
    })
  }
}