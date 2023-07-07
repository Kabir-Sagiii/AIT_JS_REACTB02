import { useState } from "react";
function Products() {
  let [products, setProducts] = useState([
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
      <h2>Products Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt neque
        culpa repudiandae pariatur corrupti voluptatum dolorem labore
        accusantium, aspernatur sequi incidunt reiciendis ullam libero, deserunt
        quibusdam fugit officiis maiores cupiditate, ipsum exercitationem
        distinctio perspiciatis! Quam consectetur id odio quo omnis illum,
        tenetur ipsam provident dicta ab vitae, magnam perspiciatis?
      </p>

      <div>
        <table
          cellpadding="10px"
          style={{ width: "1000px", margin: "50px auto" }}
        >
          <thead
            style={{
              backgroundColor: "black",

              color: "white",
            }}
          >
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>RATING</th>
            </tr>
          </thead>

          <tbody align="center">
            {products.map((ele) => {
              return (
                <tr>
                  <td>
                    <img src={ele.image} width="70" height="70" />
                  </td>
                  <td>{ele.productName}</td>
                  <td>{ele.price}</td>
                  <td>{ele.rating}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
