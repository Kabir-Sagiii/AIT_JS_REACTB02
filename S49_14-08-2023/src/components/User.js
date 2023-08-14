import { useEffect, useState } from "react";
import NoUser from "./NoUser";
import UserTable from "./UserTable";
import axios from "axios";
function User() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
  });
  useEffect(() => {
    getUserData();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4000/data/${id}`)
      .then(() => {
        alert("User Successfully Removed");
        getUserData();
      })
      .catch(() => {
        alert("User was not able to remove from the server");
      });
  };

  const insertData = async () => {
    console.log(data);

    if (Object.keys(data).includes("id")) {
      try {
        var res = await axios.put(
          `http://localhost:4000/data/${data.id}`,
          data
        );
        console.log(res);
        getUserData();
        setData({
          name: "",
          email: "",
          city: "",
        });
      } catch (error) {
        alert("Error while Updating the data");
      }
    } else {
      try {
        let res = await axios.post("http://localhost:4000/data", data);
        if (res.status === 201) {
          getUserData();
        }
        setData({
          name: "",
          email: "",
          gender: "",
        });
      } catch (error) {}
    }
  };

  const getUserData = async () => {
    try {
      var res = await axios.get("http://localhost:4000/data");
      if (res.data.length > 0) {
        setError(false);
        setUser(res.data);
      } else {
        setError(false);
        // alert("No data");
      }
    } catch (error) {
      console.log(error);

      setError(true);
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
            value={data.name}
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
            value={data.email}
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
            value={data.gender}
            checked={data.gender === "male" ? true : false}
            onChange={(e) => {
              setData({
                ...data,
                gender: "male",
              });
            }}
          />
          Male
          <input
            type="radio"
            value={data.gender}
            name="gender"
            checked={data.gender === "female" ? true : false}
            onChange={(e) => {
              setData({
                ...data,
                gender: "female",
              });
            }}
          />
          Female
        </div>
        <br />
        <button onClick={insertData}>Submit</button>
      </div>

      {error ? (
        <div>
          <h2 style={{ color: "red" }}>
            {/* Error While Fetching the Data From server */}
          </h2>{" "}
        </div>
      ) : (
        <div>
          {user.length > 0 ? (
            <UserTable user={user} deleteUser={deleteUser} setData={setData} />
          ) : (
            <NoUser />
          )}
        </div>
      )}
    </div>
  );
}

export default User;
