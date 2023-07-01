import { useState } from "react";
import "./User.css";
function Users() {
  let [user, setUser] = useState({
    name: "Rohan Verma", //user.name = "Riya Sharma"
    gender: "male",
    email: "RohanVerma@gmail.com",
    image:
      "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg",
  });

  const changeDataToRiya = () => {
    setUser({
      name: "Riya Sharma", //user.name = "Riya Sharma"
      gender: "female",
      email: "Riya@gmail.com",
      image:
        "https://th.bing.com/th/id/OIP.huELvOyoN-4BZMnTH8Fx6QHaLH?pid=ImgDet&rs=1",
    });
  };

  const changeDataToRohan = () => {
    setUser({
      name: "Rohan Verma",
      gender: "male",
      email: "RohanVerma@gmail.com",
      image:
        "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg",
    });
  };

  return (
    <div className="userscontainer">
      <div className="userimage">
        <img src={user.image} width="100%" height="100%" />
      </div>
      <div className="usercontent">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{user.name}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{user.gender}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{user.email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              officiis quisquam eligendi distinctio laboriosam pariatur earum
              impedit necessitatibus molestias quam accusantium voluptatibus
            </p>
          </dd>
        </dl>
        <button onClick={changeDataToRohan}>Rohan Verma</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={changeDataToRiya}>Riya Sharma</button>
        <br />
        <br />
        <input type="checkbox" /> <lable>Check to Switch Dark Mode</lable>
      </div>
    </div>
  );
}

export default Users;
