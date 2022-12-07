import React from "react";
import "./LogReg.css";
import "./tagsinput.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import validate from "./validate";
import axios from "axios";

const Register = () => {
  const history = useNavigate();
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    aphone: "",
    ad1: "",
    ad2: "",
    state: "",
    pin: "",
    prof: "",
    edq: "",
    cllg: "",
    course: "",
    yop: "",
    cemail: "",
    cgpa: "",
    cname: "",
    cadd: "",
    ccemail: "",
    desg: "",
    yoe: "",
    pass: "",
    cpass: "",
    compT: "",
    sques: "",
    sans: "",
  });

  // const [records, SetRecords] = useState([]);
  // const [errors, SetErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      username,
      email,
      phone,
      aphone,
      ad1,
      ad2,
      state,
      pin,
      prof,
      edq,
      cllg,
      course,
      yop,
      cemail,
      cgpa,
      cname,
      cadd,
      ccemail,
      desg,
      yoe,
      pass,
      cpass,
      compT,
      sques,
      sans,
    } = userRegistration;

    const res = await fetch("api/auth/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        aphone,
        ad1,
        ad2,
        state,
        pin,
        prof,
        edq,
        cllg,
        course,
        yop,
        cemail,
        cgpa,
        cname,
        cadd,
        ccemail,
        desg,
        yoe,
        pass,
        cpass,
        compT,
        sques,
        sans,
      }),
    });

    const get_state = "";

    if (!userRegistration.username) {
      alert("Name is required !");
      return false;
    }
    var pattern1 = new RegExp(/^[a-zA-Z' ']*$/);
    if (!pattern1.test(userRegistration.username)) {
      alert("Invalid Name !");
      return false;
    }

    if (!userRegistration.email) {
      alert("Email is required !");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(userRegistration.email)) {
      alert("Email is invalid !");
      return false;
    }
    if (!userRegistration.phone) {
      alert("Mobile No. is required !");
      return false;
    } else if (userRegistration.phone.length !== 10) {
      alert("Invalid Mobile Number !");
      return false;
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(userRegistration.phone)) {
      alert("Invalid Mobile Number !");
      return false;
    }
    if (!userRegistration.aphone) {
      alert("Alternate mobile no. is required !");
      return false;
    } else if (userRegistration.aphone.length !== 10) {
      alert("Invalid Mobile Number !");
      return false;
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(userRegistration.aphone)) {
      alert("Invalid Mobile Number !");
      return false;
    }
    if (!userRegistration.ad1) {
      alert("Address 1 is required !");
      return false;
    }
    if (!userRegistration.ad2) {
      alert("Address 2 is required !");
      return false;
    }
    if (!userRegistration.state) {
      alert("State is required !");
      return false;
    }
    if (!userRegistration.pin) {
      alert("Pincode is required !");
      return false;
    } else if (userRegistration.pin.length !== 6) {
      alert("Invalid pincode !");
      return false;
    }

    // axios
    //   .get("https://api.postalpincode.in/pincode/${pin}")
    //   .then((res) =>
    //     this.setState({
    //       get_state: res.data[0].PostOffice[0].State,
    //     })
    //   )
    //   .then((res) => console.log(res.data));
    // if (!(get_state === state)) {
    //   alert("Invalid pincode");
    //   return false;
    // }

    if (!userRegistration.prof) {
      alert("Profession is required !");
      return false;
    }
    if (!userRegistration.edq) {
      alert("Educational Qualification is required !");
      return false;
    }
    if (!userRegistration.cllg) {
      alert("College name is required !");
      return false;
    }
    if (!userRegistration.course) {
      alert("Course name is required !");
      return false;
    }
    // if (!userRegistration.yop) {
    //   errors.yop = "Year of passing is required !";
    // }
    if (!userRegistration.pass) {
      alert("Password is required !");
      return false;
    } else if (userRegistration.pass.length < 6) {
      alert("Password must have atleast 6 characters!");
      return false;
    } else if (userRegistration.pass.length > 10) {
      alert("Password length cannot exceed more than 10 characters !");
      return false;
    }
    if (!userRegistration.cpass) {
      alert("Confirm password is required !");
      return false;
    } else if (userRegistration.pass !== userRegistration.cpass) {
      alert("Password and Confirm Password must be same !");
      return false;
    }
    if (
      userRegistration.cemail &&
      !/\S+@\S+\.\S+/.test(userRegistration.cemail)
    ) {
      alert("Invalid email id");
    }

    if (
      userRegistration.ccemail &&
      !/\S+@\S+\.\S+/.test(userRegistration.ccemail)
    ) {
      alert("Invalid email id");
    }

    if (!userRegistration.sques) {
      alert("Security Question is required !");
      return false;
    }

    if (!userRegistration.sans) {
      alert("Security answer is required !");
      return false;
    }

    const data = await res.json();
    if (res.status === 422) {
      window.alert("Email id already exists!");
    } else {
      window.alert("Registration successful");
      history("/login");
    }
  };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-4 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-10 col-lg-6 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    User Registration Form
                  </h3>

                  <form method="POST">
                    <div className="row">
                      <label className="form-label" for="fullname">
                        Full Name
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={userRegistration.username}
                            onChange={handleInput}
                            name="username"
                          />
                          {/* {errors.username && (
                            <p className="error">{errors.username}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        Personal Email
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={userRegistration.email}
                            onChange={handleInput}
                            name="email"
                            id="email"
                          />
                          {/* {errors.email && (
                            <p className="error">{errors.email}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Mobile No.
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="phoneNumber"
                            // id="phoneNumber"
                            className="form-control"
                            placeholder="XXX XXX XXXX"
                            value={userRegistration.phone}
                            onChange={handleInput}
                            name="phone"
                            id="phone"
                          />
                          {/* {errors.phone && (
                            <p className="error">{errors.phone}</p>
                          )} */}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Alternate Mobile No.
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="phoneNumber"
                            className="form-control"
                            placeholder="XXX XXX XXXX"
                            value={userRegistration.aphone}
                            onChange={handleInput}
                            name="aphone"
                            id="aphone"
                          />
                          {/* {errors.aphone && (
                            <p className="error">{errors.aphone}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="address" className="form-label">
                        House No./Lane No.
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.ad1}
                            onChange={handleInput}
                            name="ad1"
                            id="ad1"
                          />
                          {/* {errors.ad1 && <p className="error">{errors.ad1}</p>} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="address" className="form-label">
                        City/Town
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.ad2}
                            onChange={handleInput}
                            name="ad2"
                            id="ad2"
                          />
                          {/* {errors.ad2 && <p className="error">{errors.ad2}</p>} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          State
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <select
                            className="form-control"
                            id="state"
                            name="state"
                            value={userRegistration.state}
                            onChange={handleInput}
                          >
                            <option value="Select state">Select State</option>
                            <option value="Aandhra Pradesh">
                              Aandhra Pradesh
                            </option>
                            <option value="Andaman & Nicobar Islands">
                              Andaman & Nicobar Islands
                            </option>
                            <option value="Arunanchal Pradesh">
                              Arunanchal Pradesh
                            </option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chattisgarh">Chattisgarh</option>
                            <option value="Daman & Diu">Daman & Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Haryana">Haryana</option>

                            <option value="Himanchal Pradesh">
                              Himanchal Pradesh
                            </option>
                            <option value="Jammu & Kashmir">
                              Jammu & Kashmir
                            </option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Lakshdweep">Lakshdweep</option>
                            <option value="Madhya Pradesh">
                              Madhya Pradesh
                            </option>

                            <option value="Maharastra">Maharastra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>

                            <option value="Mizoram">Mizoram</option>

                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Pudducherry">Pudducherry</option>
                            <option value="Punjab">Punjab</option>

                            <option value="Rajasthan">Rajasthan</option>

                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>

                            <option value="Tripura">Tripura</option>

                            <option value="Uttrakhand">Uttrakhand</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Pradesh</option>
                          </select>
                          {/* {errors.state && (
                            <p className="error">{errors.state}</p>
                          )} */}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Pin Code
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="text"
                            // id="pincode"
                            className="form-control"
                            placeholder="XXXXXX"
                            value={userRegistration.pin}
                            onChange={handleInput}
                            name="pin"
                            id="pin"
                          />
                          {/* {errors.pin && <p className="error">{errors.pin}</p>} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="company type" className="form-label">
                        Profession
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <select
                            className="form-control"
                            id="prof"
                            name="prof"
                            value={userRegistration.prof}
                            onChange={handleInput}
                          >
                            <option value="Select course">
                              Select Profession
                            </option>
                            <option value="Student">Student</option>
                            <option value="Working Professional">
                              Working Professional
                            </option>
                          </select>
                          {/* {errors.prof && (
                            <p className="error">{errors.prof}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name="student"
                          id="student"
                          value="Student"
                          style={{ margin: "5px" }}
                          onChange={handleInput}
                        />
                        Student <br />
                        <input
                          type="checkbox"
                          name="working"
                          id="working"
                          value="Working"
                          style={{ margin: "5px" }}
                          onChange={handleInput}
                        />
                        Working Professional <br />
                      </div>
                    </div> */}

                    <div className="row">
                      <label className="form-label" for="fullname">
                        Educational Qualification
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.edq}
                            onChange={handleInput}
                            id="edq"
                            name="edq"
                          />
                          {/* {errors.edq && <p className="error">{errors.edq}</p>} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        College Name
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.cllg}
                            onChange={handleInput}
                            id="cllg"
                            name="cllg"
                          />
                          {/* {errors.cllg && (
                            <p className="error">{errors.cllg}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Course Enrolled
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <select
                            className="form-control"
                            id="course"
                            name="course"
                            value={userRegistration.course}
                            onChange={handleInput}
                          >
                            <option value="Select course">Select Course</option>
                            <option value="BSc">BSc</option>
                            <option value="BCA">BCA</option>
                            <option value="Btech">Btech</option>
                            <option value="Mtech">Mtech</option>
                            <option value="MSc">MSc</option>
                            <option value="MCA">MCA</option>
                          </select>
                          {/* {errors.course && (
                            <p className="error">{errors.course}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="year of passing" className="form-label">
                        Year of Passing
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="YYYY"
                            value={userRegistration.yop}
                            onChange={handleInput}
                            id="yop"
                            name="yop"
                          />
                          {/* {errors.yop && <p className="error">{errors.yop}</p>} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        College email id
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control"
                            value={userRegistration.cemail}
                            onChange={handleInput}
                            id="cemail"
                            name="cemail"
                          />
                          {/* {errors.cemail && (
                            <p className="error">{errors.cemail}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Current CGPA
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="decimal"
                            className="form-control"
                            value={userRegistration.cgpa}
                            onChange={handleInput}
                            id="cgpa"
                            name="cgpa"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="company type" className="form-label">
                        Company Type
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <select
                            className="form-control"
                            id="compT"
                            name="compT"
                            value={userRegistration.compT}
                            onChange={handleInput}
                          >
                            <option value="Select course">
                              Select Company Type
                            </option>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label className="form-label" for="fullname">
                        Company Name
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="cname"
                            className="form-control"
                            value={userRegistration.cname}
                            onChange={handleInput}
                            name="cname"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="email" className="form-label">
                        Company email
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            id="ccemail"
                            value={userRegistration.ccemail}
                            onChange={handleInput}
                            name="ccemail"
                          />
                          {/* {errors.ccemail && (
                            <p className="error">{errors.ccemail}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="phone number" className="form-label">
                        Company Address
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="phoneNumber"
                            className="form-control"
                            value={userRegistration.cadd}
                            onChange={handleInput}
                            id="cadd"
                            name="cadd"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Designation/ Job Profile
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control"
                            value={userRegistration.desg}
                            onChange={handleInput}
                            id="desg"
                            name="desg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label for="giturl" className="form-label">
                        Years of Experience
                      </label>
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="Number"
                            className="form-control"
                            value={userRegistration.yoe}
                            onChange={handleInput}
                            id="yoe"
                            name="yoe"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Security Question
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <select
                            className="form-control"
                            id="sqes"
                            name="sques"
                            value={userRegistration.sques}
                            onChange={handleInput}
                          >
                            <option value="Please select your security question">
                              Please select your security question
                            </option>
                            <option value="What is your favourite book?">
                              What is your favourite book?
                            </option>
                            <option value="What is the name of your first school?">
                              What is the name of your first school?
                            </option>
                            <option value="What is your favourite place to visit?">
                              What is your favourite place to visit?
                            </option>

                            <option value="Whhat is your favourite colour?">
                              What is your favourite colour?
                            </option>
                          </select>

                          {/* {errors.state && (
                            <p className="error">{errors.state}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label className="form-label" for="fullname">
                        Enter your answer
                        <font color="red">*</font>
                      </label>
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="sans"
                            className="form-control"
                            value={userRegistration.sans}
                            onChange={handleInput}
                            name="sans"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="password">
                          Password
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="pass"
                            className="form-control"
                            placeholder="****"
                            value={userRegistration.pass}
                            onChange={handleInput}
                            name="pass"
                          />
                          {/* {errors.pass && (
                            <p className="error">{errors.pass}</p>
                          )} */}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <label className="form-label" for="cpassword">
                          Confirm Password
                          <font color="red">*</font>
                        </label>
                        <div className="form-outline">
                          <input
                            type="password"
                            id="cpass"
                            className="form-control"
                            placeholder="****"
                            value={userRegistration.cpass}
                            onChange={handleInput}
                            name="cpass"
                          />
                          {/* {errors.cpass && (
                            <p className="error">{errors.cpass}</p>
                          )} */}
                        </div>
                      </div>
                    </div>

                    {/* Already having an Account */}

                    <div className="text-center fs-6">
                      {" "}
                      <a href="/Login">Already Have an Account</a> ?{" "}
                      <a href="/Login">Login</a>{" "}
                    </div>

                    {/* Button Part */}

                    {/* <div className="col-md-6 mb-4 pb-2"> */}
                    <div className="mt-4 pt-2 ml-2" align="center">
                      <a
                        class="btn btn-primary"
                        href="#"
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

export default Register;