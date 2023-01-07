import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';
const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>


          <div className="collapse navbar-collapse" id="navbarRightAlignExample">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">User</NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another action</a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"
                >Disabled</a
                >
              </li>
            </ul>

          </div>

        </div>

      </nav>
    </>
  );
};

export default index;