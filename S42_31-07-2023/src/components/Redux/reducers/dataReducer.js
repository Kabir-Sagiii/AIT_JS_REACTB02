let initialData = {
  name: "",
  city: "",
  electronicsdata: [],
  jewelerydata: [],
  mensclothing: [],
  womensclothing: [],
  addtocart: [],
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
  } else if (action.type === "ELECTRONICS") {
    storedata = {
      ...storedata,
      electronicsdata: action.payload,
    };
  } else if (action.type === "ADDTOCART") {
    storedata = {
      ...storedata,
      addtocart: [...storedata.addtocart, action.payload],
    };
  }

  return storedata;
};

export default dataReducer;
