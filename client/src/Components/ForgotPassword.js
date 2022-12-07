import React, { useState } from "react";
import axios from "axios";
import "./LogReg.css";
import { Component, Form } from "react";
import "./tagsinput.css";

import { useNavigate } from "react-router-dom";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
   this.onChangeAns = this.onChangeAns.bind(this);
   this.onChangeNewpass= this.onChangeNewpass.bind(this);
   this.onChangeOldpass=this.onChangeOldpass.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);
  

   this.state = {
      sques: "",
      sans: "",
      npass: "",
      cnpass: "",
      email: ""
    };
  }

  onChangeAns(e) {
     this.setState({
       sans: e.target.value
     })
   // localStorage.setItem("sa",e.target.value);
  }
  onChangeOldpass(e){
    this.setState({
      npass:e.target.value
    })
   // localStorage.setItem("oldpass",e.target.value);
  }
  onChangeNewpass(e){
    this.setState({
      cnpass:e.target.value
    })
   // localStorage.setItem("newpass",e.target.value);
  }

  componentDidMount() {
    const p = new URLSearchParams(window.location.pathname);
    const p1 = p.toString();
    const path = p1.substring(23).slice(0, -4);
   

    axios
      .get("http://localhost:5000/api/auth/forgot/" + path)
      .then((response) => {
        this.setState({
          sques: response.data.sques,
          email: response.data.email
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async handleSubmit(e) {

    e.preventDefault();

    // if (!localStorage.getItem("newpass")) {
    //   alert("Confirm password is required !");
    //   return false;
    // } else 
    if (this.state.npass !== this.state.cnpass) {
      alert("Password and confirm password does not match");
      return false;
    }

   /* const event = {
      email: localStorage.getItem("email"),
      sans : localStorage.getItem("sa")
    }*/
    

    const res = await fetch("/api/auth/checkans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:this.state.email,
        sans :this.state.sans
      }),
    });
    if (res.status === 400) {
      window.alert("Invalid answer");
    } else {
      

      const x = await fetch("/api/auth/setpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:this.state.email,
          password:this.state.cnpass
        }),
      });
      if(x.status===400)
      {
        window.alert("Cannot update");
      }
      else{
        window.alert("Password updated successfully");
        window.location="/login";
      }

      //window.location="/login";
      }





    }
  

  render() {
    //localStorage.getItem("email",this.state.email);
    return (
      <>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-6 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                      Forgot Password
                    </h3>
                    <form method="POST">
                      <div className="row">
                        <div className="row">
                          <label className="form-label" for="password">
                            {this.state.sques}
                            <font color="red">*</font>
                          </label>
                          <div className="col-md-12 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="password"
                                name="password"
                                className="form-control"
                                //value={this.state.sans}
                                onChange={this.onChangeAns}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 mb-4 pb-2">
                            <label className="form-label" for="emailAddress">
                              Enter your new password
                              <font color="red">*</font>
                            </label>

                            <div className="form-outline">
                              <input
                                id="captcha"
                                className="form-control"
                                placeholder="**********"
                                onChange={this.onChangeOldpass}
                                // value={npass}
                                // onChange={(e) => {
                                //   setNpass(e.target.value);
                                // }}
                              />
                            </div>
                          </div>

                          <div className="col-md-12 mb-4 pb-2">
                            <label className="form-label" for="cpassword">
                              Confirm your new password
                              <font color="red">*</font>
                            </label>
                            <div className="form-outline">
                              <input
                                type="text"
                                id="inputType"
                                className="form-control"
                                placeholder="***********"
                                onChange={this.onChangeNewpass}
                                // value={cnpass}
                                // onChange={(e) => {
                                //   setCnpass(e.target.value);
                                // }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 ml-2" align="center">
                          <a
                            class="btn btn-primary"
                            href="#"
                            role="button"
                             onClick={this.handleSubmit}
                          >
                            Change Password
                          </a>{" "}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
