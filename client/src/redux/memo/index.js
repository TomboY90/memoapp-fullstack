import { ADD_MEMO, DELETE_MEMO, LOAD_MEMO, UPDATE_MEMO } from './actions';

const initialState = {
  memoList: [],
  currentMemo: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEMO:
      console.log('특정 메모를 api 를 통해 가져온 후 오는 곳', action.payload);
      return {
        ...state,
        currentMemo: action.payload
      }
    case DELETE_MEMO:
      console.log('특정 메모를 api 를 통해 삭제한 후 오는 곳', action.payload);
      return;
    default:
      return state;
  }
}