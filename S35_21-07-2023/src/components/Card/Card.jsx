function Card() {
  return (
    <div className="card">
      {/* <div className="card-header"> */}
      <img
        className="card-img-top"
        src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1"
        height="250"
      />
      {/* </div> */}

      <div className="card-body">
        <h3 className="card-title">Ansh Verma</h3>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          atque, quos quaerat iusto incidunt corrupti molestiae temporibus
          architecto qui voluptate.
        </p>
        <button className="btn btn-primary mx-3">Get Profile</button>
        <button className="btn btn-outline-primary">Navigate</button>
      </div>

      <div className="card-footer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          tenetur nesciunt, autem excepturi veniam deserunt!
        </p>
      </div>
    </div>
  );
}

export default Card;
