import { CITY } from "../actiontypes/actiontypes";
export let cityActionCreator = (data) => {
  return {
    type: CITY,
    payload: data,
  };
};
