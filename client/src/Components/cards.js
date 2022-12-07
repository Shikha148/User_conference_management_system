


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";
const Event = props => (
    <div className="col-md-3">
                        <div className="card h-100" style={{ width: '18rem' }}>
                            <img src="machine.jpeg" className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">{props.event.topic}</h5>
                                <p className="card-text">{props.event.description}</p>
                                
                                <Link to={"/viewevent/"+props.event._id}><a href="#" className="btn btn-primary">Register</a></Link> 
                            </div>
                        </div>
         </div>
  )
  
  export default class EventsList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {events : []};
    }
  
    componentDidMount() {
      
      axios.get('http://localhost:5000/events/')
        .then(response => {
          this.setState({ events: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
      
    }
  
   
  
    eventList() {
      return this.state.events.map(currentevent => {
        return <Event event={currentevent}  key={currentevent._id}/>;
      })
    }



    render() {
        return (

            <div className="container">
                <div className="top">
                <Header />
                <br/>
                    <p><h3 className="mb-4 pb-2 pb-md-0 mb-md-5" align="center">
                    Upcoming Events
                  </h3>
                    </p>
                </div>
                <div className="row gy-3 my-3 " >
                { this.eventList() }       
                </div>

            </div>
        );
    }
}