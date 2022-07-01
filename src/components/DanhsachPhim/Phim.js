import React, { Component } from "react";
import phim from "./dataFilm.json";
import "./Phim.css";
export default class Phim extends Component {
  render() {
    return (
      <div className="container phim">
        <nav
          className="navbar navbar-expand-sm navbar-dark "
          style={{ backgroundColor: "rgba(87,83,149,0.3)" }}
        >
          <a className="navbar-brand" href="/#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="dropdownId"
                  data-toggle="dropdown"
                 
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="/#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="row" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
          {phim.map((item, idx) => {
            return (
              <div key={idx + item} className="col-3 pl-3 pr-2 pt-2 pb-2">
                <div >
                  <img
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                    style={{
                      width: "250px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {item.tenPhim}
                  </h2>
                  <p style={{ fontSize: "13px", color: "#fff" }}>
                    {item.moTa.length > 80 ? (
                      <span>{item.moTa.substring(0, 80)}...</span>
                    ) : (
                      <span>{item.moTa}</span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
