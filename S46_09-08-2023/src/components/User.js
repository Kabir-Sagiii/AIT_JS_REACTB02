import { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
  });
  useEffect(() => {
    getUserData();
  }, []);

  const insertData = async () => {
    let res = await axios.post("http://localhost:4000/data", data);
    if (res.status === 201) {
      getUserData();
    }

    // console.log(res);
  };

  const getUserData = async () => {
    var res = await axios.get("http://localhost:4000/data");
    if (res.data.length > 0) {
      setUser(res.data);
    } else {
      alert("No data");
    }
  };
  return (
    <div>
      <div
        style={{
          width: "500px",
          margin: "100px auto 20px",
          boxShadow: "0 0 10px black",
          padding: "20px",
        }}
      >
        <h2>User Form</h2>

        <div>
          <input
            type="text"
            placeholder="Enter Text"
            onChange={(e) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => {
              setData({
                ...data,
                gender: e.target.value,
              });
            }}
          />
          Male
          <input
            type="radio"
            value="female"
            name="gender"
            onChange={(e) => {
              setData({
                ...data,
                gender: e.target.value,
              });
            }}
          />
          Female
        </div>
        <br />
        <button onClick={insertData}>Submit</button>
      </div>

      <table style={{ width: "300px", margin: "10px auto 100px" }}>
        <tbody>
          {user.map((ele) => {
            return (
              <tr style={{ marginTop: "20px" }} key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.gender}</td>
                <td>
                  <button>Edit</button>
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
  );
}

export default User;
