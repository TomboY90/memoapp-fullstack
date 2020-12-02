import { apiClient } from 'lib/api';

// Action Types
export const ADD_MEMO = "ADD_MEMO";
export const LOAD_MEMO = "LOAD_MEMO";
export const DELETE_MEMO = "DELETE_MEMO";
export const UPDATE_MEMO = "UPDATE_MEMO";

// Action Creator
export const addMemo = (payload) => {
  return {
    type: ADD_MEMO,
    payload
  }
};

export const loadMemo = (payload) => {
  return {
    type: LOAD_MEMO,
    payload
  }
};

export const deleteMemo = (payload) => {
  return {
    type: DELETE_MEMO,
    payload
  }
};

export const updateMemo = (payload) => {
  return {
    type: UPDATE_MEMO,
    payload
  }
};
