import React from "react";

function Component1({ children }) {
  //props = {children:"Component 1 conten"}
  return (
    <div>
      <h2 style={{ color: "red" }}>Component - 1</h2>
      {children}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        voluptatum et animi iusto veniam nihil amet ab! Quod aut accusamus,
        quaerat esse facere in, mollitia fugiat aliquid pariatur consequuntur,
        perferendis quia deleniti modi possimus inventore tempore magni
        molestias quam? Tenetur commodi est quis aspernatur amet enim qui
        similique, itaque sit maxime nulla neque, ea dolore assumenda
        dignissimos repellat repellendus facilis in eaque animi voluptas
        cupiditate. Iusto nam eum voluptas molestias sunt! Quia iure, at illum
        praesentium ab aliquid! Qui perferendis aspernatur mollitia,
        voluptatibus non et dolore! Corrupti illo velit enim, voluptas officia
        voluptates placeat fugit. Hic, voluptatem. Quaerat, distinctio nobis!
      </p>
    </div>
  );
}

export default Component1;
