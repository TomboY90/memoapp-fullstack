import { 
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_SUCCESS
} from './actions';

const initialState = {
  user: {
    name: '',
  },
  isLoading: false,
  authenticated: false,
  errMsg: ''
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLoading: true,
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: { name: payload.name },
        isLoading: false,
        authenticated: true
      }
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errMsg: payload.error
      }
    default:
      return state;
  }
}

export default reducer;