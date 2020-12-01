// import { } from "./actions";

const initialState = {
  todo: null,
};

const todo = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default todo;
