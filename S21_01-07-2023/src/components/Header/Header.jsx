import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="title">
        <h1>PORTFOLIO</h1>
      </div>

      <div className="menus">
        <a href="#">HOME</a>
        <a href="#">RESUME</a>
        <a href="#">PROFILE</a>
        <a href="#">HELP</a>
      </div>
    </div>
  );
}

export default Header;
