const router = require('express').Router();
let Booking = require('../model/booking.model');


router.route('/add').post((req,res) => {

    
    const userEmail= req.body.userEmail;
    const eventId= req.body.eventId;
    const eventTp=req.body.eventTp;
    const eventDes= req.body.eventDes;

    
    const newBook = new Booking({userEmail,eventId,eventTp,eventDes});

    
    newBook.save()
    .then(() => res.json('Booking added!'))
    .catch(err => res.status(400).json('Errors: '+ err));
});

/*router.route('/:id').get((req, res) =>{
    Booking.find(req.params.userEmail)
    .then(Booking => res.json(Booking))
    .catch(err => res.status(400).json('Errors: '+ err));
}); */

router.route('/email/:userEmail').get(function(req,res){

    Booking.count(({userEmail:req.params.userEmail}),function(err,val){
        if(err)
        {
          res.send("errrrr")
        }else
        {
          res.json(val);
        }
      })

})

router.route('/regemail/:userEmail').get(function(req,res){

  Booking.find(({userEmail:req.params.userEmail}),function(err,val){
      if(err)
      {
        res.send("errrrr")
      }else
      {
        res.json(val);
      }
    })

})

router.route('/email/event/:userEmail/:eventId').get(function(req,res){

  Booking.count(({userEmail:req.params.userEmail,eventId:req.params.eventId}),function(err,val){
      if(err)
      {
        res.send("errrrr")
      }else
      {
        res.json(val);
      }
    })

})

router.route('/event/:eventId').get(function(req,res){

    Booking.count(({eventId:req.params.eventId}),function(err,val){
        if(err)
        {
          res.send("errrrr")
        }else
        {
         res.json(val);
          
        }
      })

})

module.exports = router;