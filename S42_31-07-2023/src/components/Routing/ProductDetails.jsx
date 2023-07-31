import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartActionCreator } from "../Redux/action/actions";

function ProductDetails(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((storedata) => {
    return storedata.electronicsdata.filter((product) => product.id == id);
  });

  const addtocart = () => {
    dispatch(addToCartActionCreator(product[0]));
  };

  return (
    <div className="container mt-5">
      <div className="row text-center mb-5">
        <h3 className="text-uppercase text-primary">
          {product[0].category} CATEGORY
        </h3>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={product[0].image} width="90%" height="250" />
        </div>
        <div className="col-6">
          <dl>
            <dt>Product Title</dt>
            <dd>{product[0].title}</dd>
            <dt>Product Price</dt>
            <dd>$ {product[0].price}</dd>
            <dt>Product Description</dt>
            <dd>{product[0].description}</dd>
          </dl>
          <button className="btn btn-outline-primary me-3" onClick={addtocart}>
            Add-to-Cart
          </button>
          <button className="btn btn-outline-danger">Back to Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
