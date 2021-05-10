import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="row">
            <div className="col-3">
              <Link to="/" className="navbar-brand mx-3">
                <a>GOTRIP</a>
              </Link>
              <Link className="navbar-brand mx-3">
                <a>|</a>
              </Link>
            </div>

            <div className="col-9">
              <Link to="/" className="navbar-brand mx-3">
                <a>หน้าหลัก</a>
              </Link>
              <Link to="/user" className="navbar-brand mx-3">
                <a>AddLocation</a>
              </Link>

              <Link to="/list" className="navbar-brand mx-3">
                <a>EditLocation</a>
              </Link>
            </div>
          </div>
        </nav>

        <img
          src="https://gotrip.ge/img/logo-blk.png"
          className="img-fluid "
          alt=""
        />
      </div>
    );
  }
}

export default Header;
