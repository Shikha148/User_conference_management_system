import "./error_pg.css";

const validate = (userRegistration) => {
  let errors = {};

  if (!userRegistration.username) {
    errors.username = "Name is required !";
    return false;
  }
  var pattern1 = new RegExp(/^[a-zA-Z' ']*$/);
  if (!pattern1.test(userRegistration.username)) {
    errors.username = "Invalid Name !";
    return false;
  }

  if (!userRegistration.email) {
    errors.email = "Email is required !";
    return false;
  } else if (!/\S+@\S+\.\S+/.test(userRegistration.email)) {
    errors.email = "Email is invalid !";
    return false;
  }
  if (!userRegistration.phone) {
    errors.phone = "Mobile No. is required !";
    return false;
  } else if (userRegistration.phone.length !== 10) {
    errors.phone = "Invalid Mobile Number !";
    return false;
  }
  var pattern = new RegExp(/^[0-9\b]+$/);
  if (!pattern.test(userRegistration.phone)) {
    errors.phone = "Invalid Mobile Number !";
    return false;
  }
  if (!userRegistration.aphone) {
    errors.aphone = "Alternate mobile no. is required !";
    return false;
  } else if (userRegistration.aphone.length !== 10) {
    errors.aphone = "Invalid Mobile Number !";
    return false;
  }
  var pattern = new RegExp(/^[0-9\b]+$/);
  if (!pattern.test(userRegistration.aphone)) {
    errors.aphone = "Invalid Mobile Number !";
    return false;
  }
  if (!userRegistration.ad1) {
    errors.ad1 = "Address 1 is required !";
    return false;
  }
  if (!userRegistration.ad2) {
    errors.ad2 = "Address 2 is required !";
    return false;
  }
  if (!userRegistration.state) {
    errors.state = "State is required !";
    return false;
  }
  if (!userRegistration.pin) {
    errors.pin = "Pincode is required !";
    return false;
  } else if (userRegistration.pin.length !== 6) {
    errors.pin = "Invalid pincode !";
    return false;
  }
  if (!userRegistration.prof) {
    errors.prof = "Profession is required !";
    return false;
  }
  if (!userRegistration.edq) {
    errors.edq = "Educational Qualification is required !";
    return false;
  }
  if (!userRegistration.cllg) {
    errors.cllg = "College name is required !";
    return false;
  }
  if (!userRegistration.course) {
    errors.course = "Course name is required !";
    return false;
  }
  // if (!userRegistration.yop) {
  //   errors.yop = "Year of passing is required !";
  // }
  if (!userRegistration.pass) {
    errors.pass = "Password is required !";
    return false;
  } else if (userRegistration.pass.length < 6) {
    errors.pass = "Password must have atleast 6 characters!";
    return false;
  } else if (userRegistration.pass.length > 10) {
    errors.pass = "Password length cannot exceed more than 10 characters !";
    return false;
  }
  if (!userRegistration.cpass) {
    errors.cpass = "Confirm password is required !";
    return false;
  } else if (userRegistration.pass !== userRegistration.cpass) {
    errors.cpass = "Password and Confirm Password must be same !";
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(userRegistration.cemail)) {
    errors.cemail = "Invalid email id";
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(userRegistration.ccemail)) {
    errors.ccemail = "Invalid email id";
    return false;
  }

  return errors;
};

export default validate;
