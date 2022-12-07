import "./error_pg.css";

const validate_login = (userLogin) => {
  let errors = {};

  if (!userLogin.userid) {
    errors.userid = "Email is required !";
  } else if (!/\S+@\S+\.\S+/.test(userLogin.userid)) {
    errors.email = "Email is invalid !";
  }
  if (!userLogin.password) {
    errors.password = "Password is required !";
  } else if (userLogin.password.length < 6) {
    errors.password = "Password must have atleast 6 characters!";
  } else if (userLogin.password.length > 10) {
    errors.password = "Password length cannot exceed more than 10 characters !";
  }
};

export default validate_login;
