import { useSelector } from "react-redux";
function Cart() {
  let cartData = useSelector((storedata) => {
    return storedata.addtocart;
  });
  return (
    <div className="container mt-5">
      {cartData.length > 0 &&
        cartData.map((cartproduct) => {
          return (
            <div
              className="row mt-3"
              key={cartproduct.id}
              style={{ boxShadow: "0 0 10px black", padding: "15px" }}
            >
              <div className="col-4">
                <img src={cartproduct.image} width="100%" height={100} />
              </div>
              <div className="col-8">
                <h4>{cartproduct.title}</h4>
                <p>${cartproduct.price}</p>
                <button className="btn btn-outline-primary">
                  Remove Product
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
