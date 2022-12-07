import React, { useEffect } from "react";
import  { Component,useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default class BookEvents extends Component{

render(){
    const book = {
        userEmail: localStorage.getItem("emailid") ,
        eventId: localStorage.getItem("eventId"),
        eventTp: localStorage.getItem("topic"),
        eventDes: localStorage.getItem("description")
    }
    localStorage.removeItem("eventId");
    localStorage.removeItem("eventTp");
    localStorage.removeItem("eventDes");

    axios.post('http://localhost:5000/book/add', book)
      .then(res => console.log(res.data));
      setTimeout("location.href = '/home'", 5000);
    

  return (
    <div>
      <h5 className="mt-4 ml-4 pb-2 pb-md-0 mb-md-5">
        You booked succesfully.
        {/* <a href="/Login">Login Again</a> */}
      </h5>
      </div>
    
  );
}
}

