import { createPortal } from "react-dom";

function Portal() {
  return (
    <div>
      <h2>Portal Concept in React</h2>

      {createPortal(
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          aliquam omnis veritatis. Error odit earum, a nulla rem cupiditate ad
          perspiciatis tempora obcaecati aliquam ipsum? Dolorem, quasi
          dignissimos aspernatur totam nobis ea eveniet at non veniam minus
          reprehenderit, debitis nesciunt impedit eaque rem fuga quia distinctio
          cupiditate est. Quis similique, placeat laboriosam, corrupti a id
          omnis labore, ex nihil ipsa ducimus. Optio unde porro obcaecati
          explicabo reprehenderit, consectetur quaerat. Non exercitationem
          voluptatem perferendis, deserunt dolore animi consequatur eos quisquam
          omnis cum esse laborum accusantium pariatur distinctio quis ipsa illo
          dolorem provident vero. Odit nisi totam odio itaque architecto placeat
          quas.
        </p>,
        document.getElementById("anotherRoot")
      )}

      <button>Submit</button>
    </div>
  );
}

export default Portal;
