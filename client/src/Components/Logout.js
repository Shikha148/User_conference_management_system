import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  //Promises

  const history = useNavigate();
  useEffect(() => {
    fetch("api/auth/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history("/Postlogout");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  localStorage.removeItem("token");
  localStorage.removeItem("emailid");

  return (
    <>
      <h5 className="mt-4 ml-4 pb-2 pb-md-0 mb-md-5">
        You are logged out succesfully. To login again please click the link.
        {/* <a href="/Login">Login Again</a> */}
      </h5>
    </>
  );
};

export default Logout;
