// const router = require('express').Router();
// let Feedback = require('../model/feedback.model');

// router.route('/').get((req,res) => {
//     Feedback.find()
//     .then(feedbacks => res.json(feedbacks))
//     .catch(err => res.status(400).json('Error: '+ err));
// });

// router.route('/add').post((req,res) => {

//     const email = req.body.email;
//     const star = req.body.star;
//     const description = req.body.description;
    
    
//     const newFeedback = new Feedback({email,star,description});

    
//     newFeedback.save()
//     .then(() => res.json('Feedback added!'))
//     .catch(err => res.status(400).json('Errors: '+ err));
// });
// module.exports = router;

const router = require('express').Router();
let Feed = require('../model/feedback.model');

router.route('/').get((req,res) => {
    Feed.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {

    const email = req.body.email;
    const star = req.body.star;
    const description = req.body.description;
    
    const newFeed = new Feed({email,star,description});

    
    newFeed.save()
    .then(() => res.json('Feedback added!'))
    .catch(err => res.status(400).json('Errors: '+ err));
});



module.exports = router;