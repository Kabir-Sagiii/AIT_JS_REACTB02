import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { electronicsActionCreator } from "../Redux/action/actions";

function Electronics(props) {
  const [electronicdata, setElectronicData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getElectronicData();
  }, []);
  const getElectronicData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        console.log(res.data);
        setElectronicData(res.data);
        dispatch(electronicsActionCreator(res.data));
      })
      .catch(() => {
        alert("Failed to fetch the data");
      });
  };
  return (
    <div className="p-3">
      {/* <h2 className="text-center text-dark p-2">Electronic component</h2> */}
      {electronicdata.length > 0 ? (
        <div>
          <ul>
            {electronicdata.map((product) => {
              //product = {id,title,desc,rating,price}
              return (
                <li className="mt-3" key={product.id}>
                  <Link
                    to={`/productdetails/${product.id}`}
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
