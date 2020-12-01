// import { } from "./actions";

const initialState = {
  openLogin: false,
  openSignup: false,
  openTodo: {
    open: false,
    data: null,
  }
};

const opener = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default opener;
