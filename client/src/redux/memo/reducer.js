import { 
  ADD_MEMO,
  ADD_MEMO_FAILURE,
  ADD_MEMO_SUCCESS,
  LOAD_MEMO,
  LOAD_MEMO_FAILURE,
  LOAD_MEMO_SUCCESS,
  DELETE_MEMO,
  UPDATE_MEMO,
  SELECT_CURRENT_MEMO,
  DESELECT_CURRENT_MEMO,
  CHANGE_MEMO_CONTENT,
  CHANGE_MEMO_TITLE
} from './types';

const initialState = {
  memoList: [],
  currentMemo: null,
  isLoading: false,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_MEMO:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_MEMO_SUCCESS:
      return {
        ...state,
        memoList: payload.data,
        isLoading: false
      }
    case LOAD_MEMO_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case SELECT_CURRENT_MEMO:
      return {
        ...state,
        currentMemo: payload.memo
      }
    case DESELECT_CURRENT_MEMO:
      return {
        ...state,
        currentMemo: null
      }
    case CHANGE_MEMO_TITLE:
      return {
        ...state,
        currentMemo: {
          ...state.currentMemo,
          title: payload.title
        }
      }
    case CHANGE_MEMO_CONTENT:
      return {
        ...state,
        currentMemo: {
          ...state.currentMemo,
          content: payload.content
        }
      }
    default:
      return state;
  }
}