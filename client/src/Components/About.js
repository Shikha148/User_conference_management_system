import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <div className="contents parts">
        <h3 className="abouthead">About us </h3>
        <p className="text">
         Our website  facilitates the users
         all over the globe to gather information about an event, register and 
         participate in an event happening in our CDAC campus either in online 
         or offline mode. This website will provide the all of you to check
         out and register for any particular event of CDAC, Delhi.
        </p>
        <p className="text">
         It is a platform where all can easily find interesting 
         offline and virtual events which are arranged by a CDAC,
         Delhi. The customers of this application like you will be able to 
         get the data about events and add their data by registering 
         on our platform for free.
        </p>
      </div>
      <div className="photo parts"></div>
    </div>
  );
}