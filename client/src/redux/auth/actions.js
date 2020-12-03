import { apiClient } from 'lib/api';

// Action Types
import { AUTH_LOGIN, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_REGISTER, AUTH_REGISTER_FAILURE, AUTH_REGISTER_SUCCESS } from './types';

// Action Creator
export const signinRequest = ({ name, password }) => async dispatch => {
  // Inform Login API is starting
  dispatch({
    type: AUTH_LOGIN
  });

  // API REQUEST
  try {
    const res = await apiClient.post('/user/login', { name, password });

    console.log('로그인 응답', res);

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

export const signupRequest = ({ name, password }) => async dispatch => {
  // Inform Login API is starting
  dispatch({
    type: AUTH_REGISTER
  });

  // API REQUEST
  try {
    const res = await apiClient.get('/user', {name, password});

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: error
    })
  }
}