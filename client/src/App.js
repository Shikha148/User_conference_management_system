import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";
import View from "./Components/viewevent"
import Book from "./Components/bookevent"
import Eventpg from "./Components/cards";
import Logout from "./Components/Logout";
import Postlogout from "./Components/Postlogout";
import Pay from "./Components/Pay";
import Profile from "./Components/Profile";
import Edit from "./Components/Editprofile";
import Regievent from "./Components/Regievent";
import ForgotPassword from "./Components/ForgotPassword";
import EnterEmail from "./Components/EnterEmail";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Feedback from "./Components/Feedback";

function App() {
  const user=localStorage.getItem("token");
  return (
    <>
      <Router>
        <Routes>
        {user && <Route path="/" exact element={<Navigate replace to ="/Home"/>}/>}
          <Route exact path="/" element={<Home1 />} />
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          
          {/* {user && <Route path="/" element={<Home />}></Route>} */}
         
          
          {user && <Route path="/Eventpg" element={<Eventpg />}></Route>}
          <Route path="/Eventpg" exact element={<Navigate replace to ="/Login"/>}/>
          <Route
            path="/ForgotPassword/:id"
            element={<ForgotPassword />}
          ></Route>
          <Route path="/EnterEmail" element={<EnterEmail />}></Route>


          {user && <Route path="/viewevent/:id" element={<View/>}></Route>}
          {user && <Route path="/bookevent" element={<Book/>}></Route>}
          {user && <Route path="/Logout" element={<Logout />}></Route>}
          {user && <Route path="/Profile" element={<Profile />}></Route>}
          {user && <Route path="/Edit" element={<Edit />}></Route>}
          {user && <Route path="/Feedback" element={<Feedback />}></Route>}
          {user && <Route path="/Regievent/:id" element={<Regievent />}></Route>}
          <Route path="/Postlogout" element={<Postlogout />}></Route>
         {user && <Route path="/Home" element={<Home />}></Route>}

          <Route path="/Home" exact element={<Navigate replace to ="/"/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
