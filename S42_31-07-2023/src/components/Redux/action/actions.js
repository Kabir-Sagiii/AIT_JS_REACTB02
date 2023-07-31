import { CITY, ELECTRONICS, ADDTOCART } from "../actiontypes/actiontypes";
export let cityActionCreator = (data) => {
  return {
    type: CITY,
    payload: data,
  };
};

export let electronicsActionCreator = (data) => {
  return {
    type: ELECTRONICS,
    payload: data,
  };
};

export let addToCartActionCreator = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};
