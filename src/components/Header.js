import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
function Header() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  // const { user } = JSON.parse(localStorage.getItem("currentUser"));
  // const logout = () => {
  //   localStorage.removeItem("currentUser");
  //   window.location.reload();
  //};
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle-navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars color="white" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  User
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  Cart {cartItems.length}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
