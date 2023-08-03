import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headercontainer">
      <div className="title">
        <h1>React Routing</h1>
      </div>

      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/github">Github</Link>
        <Link to="/cart">
          <span>
            <i class="bi bi-bag-heart-fill"></i>
          </span>
          Cart <span>(10)</span>
        </Link>
        {/* <Link to="/reducer">Reducer</Link>
        <Link to="/redux">Redux</Link> */}
      </div>
    </div>
  );
}

export default Header;
