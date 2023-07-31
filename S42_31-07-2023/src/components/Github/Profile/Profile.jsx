import React from "react";

function Profile(props) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <img
          src="https://avatars.githubusercontent.com/u/10639145?v=4"
          height={200}
          width="100%"
        />
      </div>
      <div className="card-body">
        <h3>Rajiv Mehta</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          sunt provident ad consequuntur.
        </p>
        <button className="btn btn-outline-primary">Profile</button>
      </div>
    </div>
  );
}

export default Profile;
