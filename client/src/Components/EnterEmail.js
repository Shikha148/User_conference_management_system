import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EnterEmail = () => {
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/auth/signemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();
    if (res.status === 400) {
      window.alert("Invalid credentials");
    } else {
      const t = JSON.stringify(data.data);
      //   d = d.toString();
      //   window.alert("logged in successfully");
      history("/ForgotPassword/" + t);
    }
  };

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
                    Enter Email
                  </h3>
                  <form method="POST">
                    <div className="row">
                      <div className="row">
                        <label className="form-label" for="password">
                          Enter your registered email
                          <font color="red">*</font>
                        </label>
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 ml-2" align="center">
                      <a
                        class="btn btn-primary"
                        href="/ForgotPassword"
                        role="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </a>{" "}
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
};

export default EnterEmail;
