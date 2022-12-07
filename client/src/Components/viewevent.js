import React, { Component } from 'react';
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
      
      localStorage.setItem("eventId",path);
  }

  

  
  async handlePayment(e){
    e.preventDefault();
    try{
			const book = "http://localhost:5000/book/email/event/"+localStorage.getItem("emailid")+"/"+localStorage.getItem("eventId");
			let val= await axios.get(book);
		val=val.data.toString();
		if((Number(val)===0))
		{
    try{
      const seats="http://localhost:5000/book/event/"+localStorage.getItem("eventId");
      let val= await axios.get(seats);
      val=val.data.toString();
      if(!(val===localStorage.getItem("no_of_seats")))
      {
    
    const c=Number(localStorage.getItem("Eventprice"));
    
		try {
			const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } =  await axios.post(orderUrl, { amount: c });
			console.log(data);
      const d =data.data;
     

      const options = {
        key: "rzp_test_qejEqMUuiY2gm2",
        amount: 400,
        currency: d.currency,
        name: "sfsa",
        description: "Test Transaction",
        order_id: d.id,
        handler: async (response) => {
          try {
            const verifyUrl = "http://localhost:5000/api/payment/verify";
            const { d } = await axios.post(verifyUrl, response);
            console.log(d);
            window.location = '/bookevent';
          } catch (error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
		  rzp1.open();

		} catch (error) {
      alert("booking is free");
      window.location = '/bookevent';
			console.log(error);
		}
    alert("Redirecting to payment gateway for the payment of Rs."+localStorage.getItem("Eventprice"));
  }
  else
  {
    alert("No seats left");
    return false;
  }
  }
  catch(error){
    console.log(error);
  }
    
	}
  else
  {
    alert("already registered");
    return false;
  }
}
catch(error)
{
  console.log(error);
}
  }


 


  render() {

    let count=this.state.price;
    count=count.toString();
    
    localStorage.setItem("Eventprice",count);
    localStorage.setItem("no_of_seats",this.state.no_of_seats);
    localStorage.setItem("topic",this.state.topic);
    localStorage.setItem("description",this.state.description);

    return (
      

      <div className="contain">
       

        <div className="top">
        <Header />
          <p><h1 style={{textAlign:'center'}} > Event Details </h1>
          </p>
        </div>


        <div className="contentout">
       
          <div className="content">
            <b><label className="label Topic"> Topic :</label></b>
            <span className="Topic"> {this.state.topic}</span>
            <br />
            <b><label className="label Dom">Domain :</label></b>
            <span className="Dom"> {this.state.domain}</span>
            <br />
            <b><label className="label Des">Description :</label></b>
            <span className="Des"> {this.state.description} </span>
            <br />

            <b><label className="label">Mode :</label></b>
            <span> {this.state.mode}</span>
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
            <span> {this.state.organiser}</span>
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
            {/* <div className="Button">
          <a href="#" className="btn btn-primary con"> Book Now </a>
        </div> */}

        <form onSubmit={this.handlePayment}>
                           
                           <div className="Button" >
                                             <input type="submit" value="Book Now " className="btn btn-primary con" />
                                           </div>
                                           </form>
          </div>
            
        </div>

        <br />

        

      </div>


     /* <div className="contain">

        <div className="top">
         
          
        </div>

        <br />

        <div className="contentout">
 
        <p><h1> Event Details </h1>
          </p>
          <div>
            <b><label className="label"> Topic :</label></b>
            <span>{this.state.topic}</span>
            <br />
            <b><label className="label">Domain :</label></b>
            <span>{this.state.domain}</span>
            <br />
            <b><label className="label">Description :</label></b>
            <span>{this.state.description} </span>
            <br />
           
    <b><label className="label">Mode :</label></b>
    <span>{this.state.mode}</span>
    <br />
    <b><label className="label">Price:</label></b>
    <span>Rs.{this.state.price} </span>
    <br />
    
    <b><label className="label"> Date :</label></b>
    <span> {this.state.date.toLocaleDateString()}</span>
    <br />
    <b><label className="label">Start time :</label></b>
    <span>{this.state.start_time} </span>
    <br />
    <b><label className="label"> End Time :</label></b>
    <span>{this.state.end_time} </span>
<br />
<b><label className="label"> Organiser :</label></b>
    <span>{this.state.organiser}</span>
    <br />
    <b><label className="label">Address  :</label></b>
    <span>{this.state.address1} </span>
    <span>{this.state.address2} </span>
    <br />
    
    <span>{this.state.city}</span>
    <br />
    <b><label className="label">State :</label></b>
    <span>{this.state.state} </span>
    <br />
    <b><label className="label">Pincode :</label></b>
    <span>{this.state.pincode} </span>
    <br />
    <b><label className="label"> Speakers Title :</label></b>
    <span>{this.state.speakers_title}</span>
    <br />
    <b><label className="label"> Speakers first Name :</label></b>
    <span>{this.state.speakers_fname}</span> <span>{this.state.speakers_mname} </span> <span>{this.state.speakers_lname} </span>
    <br />
    <b><label className="label"> About Speaker :</label></b>
    <span>{this.state.about_speaker}</span>
    
  
<div>
   <form onSubmit={this.handlePayment}>
                           
<div className="form-group mt-4 " >
                  <input type="submit" value="Pay " className="btn btn-primary" style={{ marginTop:15,color:"#000",backgroundColor: "#FFF000"}}/>
                </div>
                </form>
                            
        </div>
        
    

          </div>
        </div>

        <br />

        

      </div>*/





    );
  }
}