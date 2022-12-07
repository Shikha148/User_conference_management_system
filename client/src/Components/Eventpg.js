import React from "react";
// import "./About.css";
import "./Event.css";
export default function Eventpg() {
  const img1 = require("./event_2.jpg");
  const img2 = require("./event1.JPG");
  const img3 = require("./event_3.jpg");
  const img4 = require("./event_4.jpg");
  return (
    <div>
      <div>
        <h3 className="head mt-1 pt-2 pb-2 mb-md-5" align="center">
          Upcoming Events{" "}
        </h3>

        <div className="row justify-content-center align-items-center h-100">
          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
                marginTop: "10px",
                marginBottom: "10px",
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
              <p align="center">Lets Deep Dive into Blockchain</p>
              <p align="center">Date : 12th October, 2022 at 6.00 pm IST</p>
              <div className="mt-1 pt-0 ml-2 mb-2" align="center">
                <a class="btn btn-primary" href="#" role="button">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "15px",
                borderRadius: "10px",
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
              <p align="center">How AI is shaping mankind</p>
              <p align="center">Date : 14th October, 2022 at 5.00 pm IST</p>
              <div className="mt-1 pt-0 ml-2 mb-2" align="center">
                <a class="btn btn-primary" href="#" role="button">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
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
              <p align="center">Cyber Security</p>
              <p align="center">Date : 15th October, 2022 at 6.00 pm IST</p>
              <div className="mt-1 pt-0 ml-2 mb-2" align="center">
                <a class="btn btn-primary" href="#" role="button">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="col-3">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
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
              <p align="center">Introduction to Quantum Computing</p>
              <p align="center">Date : 20th October, 2022 at 6.00 pm IST</p>
              <div className="mt-1 pt-0 ml-2 mb-2" align="center">
                <a class="btn btn-primary" href="#" role="button">
                  Register
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
