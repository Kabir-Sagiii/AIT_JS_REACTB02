import "./Card.css";

function Card(props) {
  //props = {name:"Raj Sinha",gender:"male"}
  return (
    <div className="card">
      <img src={props.image} width="100%" height="200" />
      <h3>{props.id}</h3>
      <h3> {props.name}</h3>
      <p>{props.gender}</p>
      <button>Profile</button>
    </div>
  );
}

export default Card;
