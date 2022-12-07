import React from "react";

const ContactUs = () => {
  return (
    <>
      <h2 className="mb-mt-5 pb-2 pb-md-1 mb-md-5" align="center">
        Contact Us
      </h2>
      <p>Help us seek our objective of Digital India</p>
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h2 className="two">Call Us</h2>
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
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;
