import React from "react";
// import "./About.css";
import "./Event.css";
export default function Events() {
  const img1 = require("./event_2.jpg");
  const img2 = require("./event1.JPG");
  const img3 = require("./event_3.jpg");
  const img4 = require("./event_4.jpg");
  return (
    <div>
      <div>
        <h3 className="head mt-2 pb-2 pb-md-0 mb-md-5" align="center">
          Technologies{" "}
        </h3>

        <div className="row justify-content-center align-items-center h-100">
          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                marginTop: "10px",
                marginBottom: "30px",
                marginLeft: "15px",
                borderRadius: "10px",
              }}
            >
              <img
                className="card-img-top"
                src={img1}
                alt="Couldn't load img"
                style={{
                  height: "15rem",
                  width: "20rem",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                marginTop: "10px",
                marginBottom: "30px",
                marginLeft: "30px",
              }}
            >
              <img
                className="card-img-top"
                src={img2}
                alt="Couldn't load img"
                style={{
                  height: "15rem",
                  width: "20rem",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                marginTop: "10px",
                marginBottom: "30px",
                marginLeft: "30px",
              }}
            >
              <img
                className="card-img-top"
                src={img3}
                alt="Couldn't load img"
                style={{
                  height: "15rem",
                  width: "20rem",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "15rem",
                marginTop: "10px",
                marginBottom: "30px",
                marginLeft: "30px",
              }}
            >
              <img
                className="card-img-top"
                src={img4}
                alt="Couldn't load img"
                style={{
                  height: "15rem",
                  width: "20rem",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
