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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

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
            <li className="nav-item">
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
                href="/Eventpg"
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
                href="/Profile"
                style={{
                  color: "black",
                }}
              >
                My Bookings
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/Edit"
                style={{
                  color: "black",
                }}
              >
                My Profile
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link1"
                href="/Feedback"
                style={{
                  color: "black",
                }}
              >
                Give Feedback
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link link1 logout"
                href="/Logout"
                style={{
                  color: "black",
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
