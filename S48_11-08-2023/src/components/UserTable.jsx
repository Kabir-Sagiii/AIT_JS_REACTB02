function UserTable({ user, deleteUser, setData }) {
  return (
    <table style={{ width: "300px", margin: "10px auto 100px" }}>
      <tbody>
        {user.map((ele) => {
          return (
            <tr style={{ marginTop: "20px" }} key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.gender}</td>
              <td>
                <button
                  onClick={() => {
                    setData(ele);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(ele.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;
