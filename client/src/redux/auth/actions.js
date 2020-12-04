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

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    const msg = error.response.data.error;

    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: { msg }
    })

    alert(msg);
  }
}

export const signupRequest = ({ name, password }) => async dispatch => {
  // Inform Login API is starting
  dispatch({
    type: AUTH_REGISTER
  });

  // API REQUEST
  try {
    const res = await apiClient.post('/user', {name, password});

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: res.data
    })

    alert('계정을 생성했습니다.');
  } catch (error) {
    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: error
    })
  }
}