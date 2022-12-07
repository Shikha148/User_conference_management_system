import React from "react";
import "./Styleheader.css";
export default function () {
  const log = require("./logo.jpg");
  return (
    <div className="Headermain">
      <nav className="navbar navbar-expand-lg navbar-light bg-light one">
        <a className="navbar-brand" href="#">
          {/* EventOMania */}
          <img
            src={log}
            alt=""
            style={{
              width: "40px",
              marginLeft: "10px",
              height: "30px",
            }}
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link link1"
                href="/Home"
                style={{
                  color: "black",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link link1"
                href="/AboutUs"
                style={{
                  color: "black",
                }}
              >
                About Us{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/ContactUs"
                style={{
                  color: "black",
                }}
              >
                Contact us{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/Login"
                style={{
                  color: "black",
                }}
              >
                Events
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/Register"
                style={{
                  color: "black",
                }}
              >
                Register
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/Login"
                style={{
                  color: "black",
                }}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
