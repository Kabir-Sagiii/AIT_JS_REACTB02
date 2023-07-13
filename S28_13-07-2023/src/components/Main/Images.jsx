function Image({ image, title }) {
  //props = {image:"",title:""}
  return (
    <div>
      <img src={image} width="200" height="200" />
      <h3>{title}</h3>
    </div>
  );
}

export default Image;
