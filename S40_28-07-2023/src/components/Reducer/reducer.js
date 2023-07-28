const myReducer = (state, action) => {
  if (action.type === "increment") {
    state = {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "decrement") {
    state = {
      ...state,
      count: state.count - action.payload,
    };
  } else {
    state = {
      ...state,
      count: 0,
    };
  }

  return state;
};

export default myReducer;
