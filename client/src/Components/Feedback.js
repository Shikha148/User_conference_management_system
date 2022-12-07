import React from 'react'
import './Feedback.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Form, Row, Col } from 'react-bootstrap'


import { useState } from "react";
import { FaStar } from "react-icons/fa";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

function Feedback() {
  const [currentValue, setCurrentValue] = useState(0);
  const [des, setDes] = useState("");
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const handleClick = value => {
    setCurrentValue(value)
    console.log(value);
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
//   const handleDes=(e) =>{
//     console.log(e.value);

//   }

  const handleSubmit=(e) =>{
    e.preventDefault();
    const s=currentValue+"-star";
    //ratings value
    const feed = {
        email: localStorage.getItem("emailid"),
        star: s,
        description: des,
    }
    console.log(feed);
              axios.post('http://localhost:5000/api/feedback/add', feed)
      .then(res => console.log(res.data));
             
    window.alert("Feedback added");
    window.location="/Home";
  }

  
  return (
          <div className='App-header'>
        <Container>
        
          <Row style={{ marginTop: 120}} >
            <Col lg={6} md={6} sm={12} style={{backgroundColor: "#ffffff"}}className="p-5 m-auto shadow-sm rounded-lg">

          <Form>
         
            <center>
            <font color="black">  
            <h1 >Share your experience</h1>
            </font>
            </center>
          <Form.Group style={{ marginLeft: 150, marginTop: 20}}>
          <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      </Form.Group>
          <Form.Group style={{ marginTop: 20,color: "#1b4d89"}}>
            <Form.Control
            as='textarea'
            rows={4}
            type='textarea'
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
            placeholder='Description' style={{color: "#1b4d89"}}>
            </Form.Control>
          </Form.Group>
          <Button style={{ marginTop: 15,color:"#000",backgroundColor: "#FFF000",width: "100%"}} type ="submit" onClick={handleSubmit}>Send Now</Button>
          </Form>
          </Col>
          </Row>
        </Container>
    </div>
  );
}


const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  }

};
export default Feedback;
