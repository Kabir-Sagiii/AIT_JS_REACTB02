import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { electronicsActionCreator } from "../Redux/action/actions";

function Electronics(props) {
  const dispatch = useDispatch();
  let electronicdata = useSelector((storedata) => {
    return storedata.dataReducer.electronicsdata;
  });
  useEffect(() => {
    if (!electronicdata.length > 0) {
      getElectronicData();
    }
  }, []);
  const getElectronicData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        // console.log(res.data);

        dispatch(electronicsActionCreator(res.data));
      })
      .catch(() => {
        alert("Failed to fetch the data");
      });
  };
  return (
    <div className="p-3">
      {electronicdata.length > 0 ? (
        <div>
          <ul>
            {electronicdata.map((product) => {
              //product = {id,title,desc,rating,price}
              return (
                <li className="mt-3" key={product.id}>
                  <Link
                    to={`/productdetails/${product.id}/${product.category}`}
                    className="text-primary text-decoration-none"
                  >
                    {product.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h3 className="mt-5 text-center text-danger">No Data</h3>
      )}
    </div>
  );
}

export default Electronics;
