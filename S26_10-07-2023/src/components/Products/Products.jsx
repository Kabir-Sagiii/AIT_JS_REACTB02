import { useState } from "react";
function Product() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.length);
        setProducts(data);
      })
      .catch(() => {
        alert("Failed to Fetch Product Details");
      });
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Products Table Component </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit
        saepe suscipit repellendus dolor aspernatur nulla nostrum corrupti
        blanditiis, alias eius officia tenetur nihil nam temporibus harum.
        Dolorum similique odit ipsa delectus quis expedita voluptas et rem
        optio, dolor recusandae cumque neque sint excepturi minima fugit unde
        labore ducimus, cum rerum minus. Error molestiae obcaecati totam
        corrupti, doloremque accusantium temporibus dicta aliquid maxime, illo
        voluptatem dolore. Iusto delectus minima optio itaque vel illo dolorum
        qui accusantium quos quia, eligendi facere non accusamus totam animi
        necessitatibus sed error consequuntur autem illum aperiam ab quis quo
        at! Ut aspernatur dolorem porro ex!
      </p>
      <button onClick={getProducts}>Get Products</button>
      {products.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <table
            style={{
              margin: "auto",
              width: "1000px",
            }}
            cellPadding="10px"
          >
            <thead style={{ background: "black", color: "cornsilk" }}>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th colSpan={2}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        src={product.image}
                        width={70}
                        height={70}
                        alt="Product Image"
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <button>Details</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Product;
