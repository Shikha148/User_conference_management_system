import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";

/*const Event = props => (
  <tr>
    <td>{props.event.eventId}</td>
     <td>
      <Link to={"/Regievent/"+props.event.eventId}>View</Link>          
    </td>
  </tr>
)*/

const Event = props => (
  <div className="col-md-3">
                      <div className="card h-100" style={{ width: '18rem' }}>
                          <img src="machine.jpeg" className="card-img-top" alt="image" />
                          <div className="card-body">
                              <h5 className="card-title">{props.event.eventTp}</h5>
                              <p className="card-text">{props.event.eventDes}</p>
                              
                              <Link to={"/Regievent/"+props.event.eventId}><a href="#" className="btn btn-primary">View</a></Link> 
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
    
    axios.get('http://localhost:5000/book/regemail/'+localStorage.getItem("emailid"))
      .then(response => {
        this.setState({ events: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  

  eventList() {
    return this.state.events.map(currentevent => {
      return <Event event={currentevent} key={currentevent._id}/>;
    })
  }

  render() {
    return (
      <div className="container">
      <div className="top">
      <Header />
          <p><h1>My Events</h1>
          </p>
      </div>
      <div className="row gy-3 my-3 " >
      { this.eventList() }       
      </div>

  </div>
    )
  }
}