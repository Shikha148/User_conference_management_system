import React, { Component,Form } from 'react';
import axios from 'axios';
import './events.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';



export default class CreateEvents extends Component {


  constructor(props) {
    super(props);

    this.state = {
      topic: '',
      domain: '',
      description: '',
      no_of_seats: 0,
      mode: "Online",
      price: 100,
      date: new Date(),
      start_time: '',
      end_time: '',
      organiser: "CDAC NOIDA",
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: 122001,
      speakers_fname: '',
      speakers_mname: '',
      speakers_lname: '',
      speakers_title: "Mr",
      about_speaker: '',
      code: 91,
      phone: '',
      email: '',
      get_state: '',
      no_change: 0,
    }

    
    
  }

  componentDidMount() {
    const p = new URLSearchParams(window.location.pathname);
    const p1 = p.toString();
    const path = p1.substring(15).slice(0, -1);
    
   
    axios.get('http://localhost:5000/events/' + path)
      .then(response => {
        this.setState({
          topic: response.data.topic,
          domain: response.data.domain,
          description: response.data.description,
          no_of_seats: response.data.no_of_seats,
          mode: response.data.mode,
          price: response.data.price,
          date: new Date(response.data.date),
          start_time: response.data.start_time,
          end_time: response.data.end_time,
          organiser: response.data.organiser,
          address1: response.data.address1,
          address2: response.data.address2,
          city: response.data.city,
          state: response.data.state,
          pincode: response.data.pincode,
          speakers_fname: response.data.speakers_fname,
          speakers_mname: response.data.speakers_mname,
          speakers_lname: response.data.speakers_lname,
          speakers_title: response.data.speakers_title,
          about_speaker: response.data.about_speaker,
          code: response.data.code,
          phone: response.data.phone,
          email: response.data.email,
        })
        
      
      })
      .catch(function (error) {
        console.log(error);
      })
      
      //localStorage.setItem("eventId",path);
  }

  



 


  render() {


    return (





      <div className="contain">

        <div className="top">
        <Header />
           <p><h1 style={{textAlign:'center'}} > Event Details </h1>
          </p>
          
        </div>

        <br />

        <div className="contentout">
 
        <div className="content">
          
            <b><label className="label Topic"> Topic :</label></b>
            <span className="Topic">{this.state.topic}</span>
            <br />
            <b><label className="label Dom">Domain :</label></b>
            <span className="Dom">{this.state.domain}</span>
            <br />
            <b><label className="label Des">Description :</label></b>
            <span className="Des">{this.state.description} </span>
            <br />
            
    <b><label className="label">Mode :</label></b>
    <span>{this.state.mode}</span>
    <br />
   
    <b><label className="label"> Date :</label></b>
    <span> {this.state.date.toLocaleDateString()}</span>
    <br />
    

<b><label className="label">Start time :</label></b>
             <span className="Strt"> {this.state.start_time} </span>
            
             <b><label className="label"> End Time :</label></b>
             <span> {this.state.end_time} </span>
             <br />

<b><label className="label"> Organiser :</label></b>
    <span>{this.state.organiser}</span>
    <br />

    <b><label className="label"> Address:</label></b>
             <span> {this.state.address1}, </span>
             <span>{this.state.address2}, </span>
             <span>{this.state.city}, </span>
             <span>{this.state.state}, </span>
             <span>{this.state.pincode} </span>
           <br />

    
           <b><label className="label"> Speakers Name :</label></b>
             <span> {this.state.speakers_title} </span>
             <span>{this.state.speakers_fname} </span>
             <span>{this.state.speakers_mname} </span>
             <span>{this.state.speakers_lname} </span>
             <br />
    
    

    <b><label className="label abt"> About Speaker :</label></b>
             <span className="abt"> {this.state.about_speaker}</span>
             <br />
             <div className="price">
             <b><label className="label ">PRICE:</label></b>
             <span > Rs.{this.state.price} </span>
           </div>
             <br />
<div>
   
                            
        </div>
        
    

          </div>
        </div>

        <br />

        

      </div>





    );
  }
}