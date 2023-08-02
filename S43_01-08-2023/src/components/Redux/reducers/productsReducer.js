var productsData = {
  jewelery: [],
  mensclothing: [],
  womensclothing: [],
};

//state = {}
const productsReducer = (state = productsData, action) => {
  switch (action.type) {
    case "JEWELERY":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
    case "MENC":
      state = {
        ...state,
        mensclothing: action.payload,
      };
      break;
    case "WOMENC":
      state = {
        ...state,
        womensclothing: action.payload,
      };
      break;
  }
  return state;
};

export default productsReducer;
