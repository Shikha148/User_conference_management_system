const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');


dotenv.config({
  path: "./config.env",
});
require('dotenv').config();




const app= express();
const port = process.env.PORT || 5000;






  



require("./db/conn");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//app.use(require("./router/auth"));

const eventsRouter = require('./router/events');
const authRoutes = require('./router/auth');
const bookRoutes = require('./router/booking');
const feedRoutes = require('./router/feedback');

const paymentRoutes = require("./router/payment");
const Booking = require("./model/booking.model");


app.use('/events',eventsRouter);
app.use('/api/auth',authRoutes);
app.use('/api/feedback',feedRoutes);
app.use('/book',bookRoutes);
app.use("/api/payment/", paymentRoutes);

/*app.get('/fetch/:eventId',function(req,res){
  
  Booking.find(({eventId:req.params.eventId}),function(err,val){
    if(err)
    {
      res.send("errrrr")
    }else
    {
     // res.send(val.length);
      if(val.length===0)
      {
        res.send("0");
      }
      else{
        res.send(val);
      }
    }
  })
})*/



const PORT = process.env.PORT;



app.listen(PORT, () => {
  console.log("Server is running at port PORT");
});
