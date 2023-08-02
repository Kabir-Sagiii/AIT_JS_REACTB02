import { useState } from "react";

import { useDispatch } from "react-redux";
import { cityActionCreator } from "../action/actions";

function City(props) {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const sendCityData = () => {
    dispatch(cityActionCreator(city));
  };
  return (
    <div className="container text-center mt-5">
      <h4>City Component</h4>
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={sendCityData} className="btn btn-outline-danger mx-3">
        Submit
      </button>
    </div>
  );
}

export default City;
