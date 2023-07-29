let initialData = {
  name: "",
  city: "",
};

const dataReducer = (storedata = initialData, action) => {
  if (action.type === "NAME") {
    storedata = {
      ...storedata,
      name: action.payload,
    };
  } else if (action.type === "CITY") {
    storedata = {
      ...storedata,
      city: action.payload,
    };
  }

  return storedata;
};

export default dataReducer;
