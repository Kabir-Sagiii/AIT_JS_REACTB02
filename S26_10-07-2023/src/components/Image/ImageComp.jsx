import { useState } from "react";
import "./Image.css";
function ImageComp(props) {
  let [imageurl, setImageUrl] = useState(
    "https://th.bing.com/th/id/R.971904fa310a88b1e3c331df20180c65?rik=y%2bfGItjI9Lkdig&riu=http%3a%2f%2fjpie.nz%2fassets%2fimages%2f2020%2f10%2freact-logo.png&ehk=AebbAgjYLkWS5M2mk5uMbiWHNJv80LL8EExLQWltDNg%3d&risl=&pid=ImgRaw&r=0"
  );

  const changeToAngular = () => {
    setImageUrl(
      "https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png"
    );
  };

  const changeToReact = () => {
    setImageUrl(
      "https://th.bing.com/th/id/R.971904fa310a88b1e3c331df20180c65?rik=y%2bfGItjI9Lkdig&riu=http%3a%2f%2fjpie.nz%2fassets%2fimages%2f2020%2f10%2freact-logo.png&ehk=AebbAgjYLkWS5M2mk5uMbiWHNJv80LL8EExLQWltDNg%3d&risl=&pid=ImgRaw&r=0"
    );
  };

  return (
    <div className="image">
      <img src={imageurl} width="300" height={300} />
      <br />
      <button onClick={changeToReact}>React</button>&nbsp;&nbsp;&nbsp;
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default ImageComp;
