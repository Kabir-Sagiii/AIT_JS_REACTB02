import { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [errormsg, setErrorMsg] = useState(false);
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    gender: "",
  });
  useEffect(() => {
    getUserData();
  }, []);

  const deleteUser = (ele) => {
    axios
      .delete(`http://localhost:4000/data/${ele.id}`)
      .then(() => {
        alert("Deleted User Successfully");
        getUserData();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to Delete Users");
      });
  };

  const UpdateData = (ele) => {
    setData(ele);
  };

  const insertData = async () => {
    if (Object.keys(data).includes("id")) {
      try {
        let res = await axios.put(
          `http://localhost:4000/data/${data.id}`,
          data
        );

        getUserData();
      } catch {
        alert("Failed to Update data");
        getUserData();
      }
    } else {
      try {
        let res = await axios.post("http://localhost:4000/data", data);

        if (res.status === 201) {
          getUserData();
        }
      } catch (error) {
        if (error.response.status === 404) {
          alert("Failed to get the data");
        }
      }
    }
  };

  const getUserData = async () => {
    try {
      var res = await axios.get("http://localhost:4000/data");
      if (res.data.length > 0) {
        setErrorMsg(false);
        setUser(res.data);
        setData({
          name: "",
          email: "",
          gender: "",
        });
      } else {
        setErrorMsg(false);
        setUser([]);
      }
    } catch (error) {
      setErrorMsg(true);
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
            type="email"
            value={data.email}
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
            checked={data.gender === "male" ? true : false}
            value={data.gender}
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
            value="female"
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

      {errormsg ? (
        <div style={{ textAlign: "center", color: "red" }}>
          <h2>Error While Fetching Data</h2>
        </div>
      ) : (
        <table style={{ width: "300px", margin: "10px auto 100px" }}>
          <tbody>
            {user.length > 0 ? (
              user.map((ele) => {
                return (
                  <tr style={{ marginTop: "20px" }} key={ele.id}>
                    <td>{ele.name}</td>
                    <td>{ele.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          UpdateData(ele);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(ele);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>
                <h2>No Data to Display</h2>
              </div>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default User;
