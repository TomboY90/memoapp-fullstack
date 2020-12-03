import { apiClient } from 'lib/api';

// Action Types
import {
  ADD_MEMO,
  ADD_MEMO_FAILURE,
  ADD_MEMO_SUCCESS,
  LOAD_MEMO,
  LOAD_MEMO_FAILURE,
  LOAD_MEMO_SUCCESS,
  DELETE_MEMO,
  UPDATE_MEMO,
  UPDATE_MEMO_SUCCESS,
  UPDATE_MEMO_FAILURE
} from './types';

// Action Creator
export const getMemoListRequest = () => async dispatch => {
  dispatch({
    type: LOAD_MEMO
  });

  // API REQUEST
  try {
    const res = await apiClient.get('/memo');

    dispatch({
      type: LOAD_MEMO_SUCCESS,
      payload: { data: res.data }
    })
  } catch (error) {
    dispatch({
      type: LOAD_MEMO_FAILURE,
      payload: error
    })
  }
}

export const createMemoRequest = user => async dispatch => {
  // API REQUEST
  try {
    const res = await apiClient.post('/memo', { user: user.name });

    if(res.status === 200) {
      dispatch({
        type: ADD_MEMO_SUCCESS,
      })
      
      dispatch(getMemoListRequest());
    }
  } catch (error) {
    dispatch({
      type: ADD_MEMO_FAILURE,
      payload: error
    })
  }
}

export const updateMemoRequest = (memo) => async dispatch => {
  dispatch({
    type: UPDATE_MEMO
  });

  // API REQUEST
  try {
    const res = await apiClient.patch('/memo', memo);

    if(res.status === 200) {
      dispatch({
        type: UPDATE_MEMO_SUCCESS,
        payload: res.data
      })
      
      dispatch(getMemoListRequest());
    }
  } catch (error) {
    dispatch({
      type: UPDATE_MEMO_FAILURE,
      payload: error
    })
  }
}

export const deleteMemoRequest = (memo) => async dispatch => {
  dispatch({
    type: DELETE_MEMO
  });

  // API REQUEST
  try {
    const res = await apiClient.delete('/memo', {
      data: memo
    });

    if(res.status === 200) {
      dispatch(getMemoListRequest());
    }
  } catch (error) {
    dispatch({
      type: UPDATE_MEMO_FAILURE,
      payload: error
    })
  }
}