import React from "react";
import "./Footer.css";
export default function () {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h2 className="two">Contact-Us</h2>
              <ul>
                <li>✆ 91-9245627770</li>
                <li> ☏ 0744-2677256</li>
                <li>☏ 0744-2688256</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h2 className="two">Address</h2>
              <ul>
                <li>Park Avenue Street,434</li>
                <li>Near CarolBagh, Delhi</li>
                <li>Pincode - 324888</li>
              </ul>
            </div>
          </div>
          <p className="copyright">CDAC-Delhi © 2022</p>
        </div>
      </footer>
    </div>
  );
}