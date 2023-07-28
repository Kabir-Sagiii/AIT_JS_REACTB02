import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails(props) {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    desc: "",
    rating: {},
    price: "",
    image: "",
    category: "",
  });
  let pathParams = useParams(); // pathParams = {id:8}
  //   let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pathParams.id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <h3 className="text-uppercase text-primary">
          {product.category} CATEGORY
        </h3>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={product.image} width="90%" height="250" />
        </div>
        <div className="col-6">
          <dl>
            <dt>Product Title</dt>
            <dd>{product.title}</dd>
            <dt>Product Price</dt>
            <dd>$ {product.price}</dd>
            <dt>Product Description</dt>
            <dd>{product.description}</dd>
          </dl>
          <button className="btn btn-outline-primary me-3">Add-to-Cart</button>
          <button className="btn btn-outline-danger">Back to Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
