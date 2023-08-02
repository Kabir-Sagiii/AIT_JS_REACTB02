import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
function App() {
  return (
    <div className="App">
      {/* <h2>Class Component</h2> */}
      {/* <Header />
      <Main /> */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card image="https://purepng.com/public/uploads/large/purepng.com-women-shoppingwomenpeoplepersonsfemaleshopping-11215250867525vehx.png" />
        <Card image="https://th.bing.com/th/id/R.34d678536aec7fdf2166f61d904906c6?rik=xSBBdnc1g5jZOg&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2frm%2f99%2frm99jy_large.png%3f1521316516&ehk=kYvI4JYE5IvFpP4PU6yfVWsIyLiwM1CSTRUuGnf3vjM%3d&risl=&pid=ImgRaw&r=0" />
        <Card image="https://th.bing.com/th/id/OIP.WfqrjyGVefaL65ZMVBMblgHaHa?pid=ImgDet&rs=1" />
        <Card image="https://thumbs.dreamstime.com/b/shopaholic-28949983.jpg" />
      </div>
    </div>
  );
}

export default App;
