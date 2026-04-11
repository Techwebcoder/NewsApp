import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{
          backgroundColor:
            this.props.mode === "dark"
              ? "rgba(18,18,18,0.9)"
              : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom:
            this.props.mode === "dark"
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          className={`container-fluid text-${
            this.props.mode === "dark" ? "light" : "dark"
          }`}
        >

          <Link
            className={`navbar-brand text-${this.props.mode === "dark" ? "light" : "dark"}`}
            to="/"
          >
            StreamNews
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span
              className={`navbar-toggler-icon ${
                this.props.mode === "dark" ? "navbar-dark" : "navbar-light"
              }`}
            ></span>
          </button>

          {/* NAV ITEMS */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/general"
                >
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/health"
                >
                  Health
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/science"
                >
                  Science
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-${this.props.mode === "dark" ? "light" : "dark"}`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>

            <div
              className={`form-check form-switch text-${
                this.props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={this.props.toggleMode}
              />
              <label className="form-check-label">
                {this.props.mode === "dark"
                  ? "Disable Dark Mode"
                  : "Enable Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
