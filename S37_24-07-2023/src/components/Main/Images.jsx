function Image(props) {
  return (
    <div>
      <img src={props.image} width="200" height="200" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Image;
