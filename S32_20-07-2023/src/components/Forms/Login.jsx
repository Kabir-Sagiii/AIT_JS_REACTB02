import React from "react";

function Login(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <form>
            <div className="my-3">
              <input
                className="form-control"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div className="my-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>

            <div>
              <input type="checkbox" className="form-check-input" />
              HTML
            </div>
            <div className="form-switch">
              <input type="checkbox" className="form-check-input" /> Switch On
              to Dark Mode
            </div>
            <div className="my-3 row">
              <div className=" col-2">
                <input
                  type="radio"
                  name="gender"
                  className="form-check-input   "
                />
                Male
              </div>
              <div className="col-2">
                <input
                  type="radio"
                  name="gender"
                  className="form-check-input   "
                />
                Female
              </div>
            </div>
            <div className="text-center">
              <input
                type="button"
                value="Login"
                className="btn btn-primary px-4"
              />
            </div>
            <div className="my-3">
              <textarea className="form-control" rows={5} cols={50}></textarea>
            </div>
            <div>
              <select className="form-select form-select-md">
                <option>Select City</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Banglore</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
