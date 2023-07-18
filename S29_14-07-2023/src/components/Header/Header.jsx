import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="title">
        <h1>Bootstrap</h1>
      </div>

      <div className="menus">
        <a href="#">HOME</a>
        <a href="#">PRODUCTS</a>
        <a href="#">PROFILE</a>
        <a href="#">HELP</a>
      </div>
    </div>
  );
}

export default Header;
