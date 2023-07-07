import { useState } from "react";

function ProductsCard(props) {
  let [card, setCard] = useState([
    {
      image:
        "https://th.bing.com/th/id/OIP.ApqNNYX50btnepwFGw_XMgHaFj?pid=ImgDet&rs=1",
      productName: "Macbook Pro",
      price: 240000,
      rating: 4.5,
    },
    {
      image:
        "https://www.macworld.com/wp-content/uploads/2021/03/macbook-air-2108-hero2-100779122-orig-7.jpeg?quality=50&strip=all",
      productName: "Macbook Air",
      price: 115000,
      rating: 4.3,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.gPo-RCf6y40gfvRbovUSTgAAAA?pid=ImgDet&rs=1",
      productName: "Iphone 14",
      price: 140000,
      rating: 4.8,
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.HyrRMJZ55kqXbtxKMzN8vQAAAA?pid=ImgDet&rs=1",
      productName: "Samsung Galaxy S23  ",
      price: 140000,
      rating: 4.9,
    },
    {
      image:
        "https://pmcaonline.org/wp-content/uploads/2019/10/Vivo-V15-Pro-1-1024x576.jpg",
      productName: "Vivo A27 Pro",
      price: 40000,
      rating: 4.2,
    },
    {
      image:
        "https://www.macworld.com/wp-content/uploads/2021/03/macbook-air-2108-hero2-100779122-orig-7.jpeg?quality=50&strip=all",
      productName: "Macbook Air",
      price: 115000,
      rating: 4.3,
    },
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>Products Card</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa earum
        non molestiae. Excepturi neque quaerat totam porro nihil quas doloribus
        vero repellendus esse voluptates delectus aut quod quisquam veniam rerum
        quibusdam, omnis, consectetur eum. Nesciunt et nobis, commodi autem ex
        voluptas fugiat sapiente nihil? Harum atque facere officia amet!
        Voluptatum.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {card.map((ele) => {
          return (
            <div
              style={{
                width: "270px",
                boxShadow: "0 0 10px black",
                padding: "10px",
              }}
            >
              <img src={ele.image} width="100%" height="200" />
              <h3>{ele.productName}</h3>
              <p>{ele.price}</p>
              <button>Product Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsCard;
