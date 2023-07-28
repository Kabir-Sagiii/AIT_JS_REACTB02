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
  }

  return storedata;
};

export default dataReducer;
