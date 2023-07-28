import { useState, useReducer } from "react";
import myReducer from "./reducer";

function Counter(props) {
  //   const [state, setState] = useState(0);
  const [state, dispatch] = useReducer(myReducer, {
    count: 0,
    products: [],
    stduent: {},
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h3>Count Value is {state.count}</h3>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-1">
            <button
              onClick={() => {
                dispatch({
                  type: "increment",
                  payload: 5,
                });
              }}
              className="btn btn-outline-success"
            >
              IncCount
            </button>
          </div>

          <div className="col-1">
            <button
              onClick={() => {
                dispatch({
                  type: "decrement",
                  payload: 2,
                });
              }}
              className="btn btn-outline-danger "
            >
              DecCount
            </button>
          </div>
          <div className="col-1">
            <button
              onClick={() => {
                dispatch({ type: "reset" });
              }}
              className="btn btn-outline-info"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
