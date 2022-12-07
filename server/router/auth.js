const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
let Registration = require("../model/user");


require("../db/conn");
const User = require("../model/user");

router.get("/", (req, res) => {
  res.send("Hello World from the server router");
});



router.post("/reg", async (req, res) => {
  const {
    username,
    email,
    phone,
    aphone,
    ad1,
    ad2,
    state,
    pin,
    prof,
    edq,
    cllg,
    course,
    pass,
    cpass,
    compT,
  } = req.body;

  if (
    !username ||
    !email ||
    !phone ||
    !aphone ||
    !ad1 ||
    !ad2 ||
    !state ||
    !pin ||
    !prof ||
    !edq ||
    !cllg ||
    !course ||
    !pass ||
    !cpass
  ) {
    return res.status(422).json({ error: "Please fill the field" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res
        .status(422)
        .json({ error: "This email is already registered" });
    }
    const user = new User(req.body);

    //hashing the pass and cpass before storing

    const userReg = await user.save();
    if (userReg) {
      res.status(201).json({ message: "User registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (err) {
    console.log(err);
  }
});




//Login Route

router.post("/signin", async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      return res.status(400).json({ error: "Please fill the required fields" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(pass, userLogin.pass);

      //const token = await userLogin.generateAuthToken();


     /* res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      });*/

      if (!isMatch) {
        res.status(400).json({ error: "Password doesn't match!" });
      } else {
        
      const token = await userLogin.generateAuthToken();
      res.status(200).send({ data: token, message: "logged in successfully" });
      }
    } else {
      res.status(400).json({ error: "Email Incorrect !" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
 // res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

router.post("/signemail", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Please fill the required fields" });
    }

    const useremail = await User.findOne({ email: email });
    if (useremail) {
      res.status(200).send({ data: useremail._id, message: "loggedin " });
    } else {
      res.status(400).json({ error: "Email is not registered !" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.route("/forgot/:id").get((req, res) => {
  Registration.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) => res.status(400).json("Errors: " + err));
});

router.post('/view', (req, res) =>{
  // Registration.findById(req.params.id)
  // .then((event) => res.json(event))
  // .catch((err) => res.status(400).json("Errors: " + err));
  const { email} = req.body;
   Registration.findOne({ email: email })
  .then(event => res.json(event))
  .catch(err => res.status(400).json('Errors: '+ err));
});





router.post("/checkans", async (req, res) => {
  try {
    const { email, sans } = req.body;
    if (!sans) {
      return res.status(400).json({ error: "Please fill the required fields" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      // const isMatch = await bcrypt.compare(sans, userLogin.sans);

      if (sans === userLogin.sans) {
        res.status(200).send({ data: userLogin._id, message: "correct ans" });
      } else {
        res.status(400).json({ error: "Incorrect answer" });
      }
    } else {
      res.status(400).json({ error: "Email Incorrect !" });
    }
  } catch (err) {
    console.log(err);
  }
});


router.post("/setpass", async (req, res) => {
  try {
    //const user =  User.findOne({ email: req.body.email });
   

   // const salt =  bcrypt.genSalt(Number(12));
		//const hashPassword =  bcrypt.hash(req.body.password, salt);

		// User({ pass: req.body.password,cpass: req.body.password}).save();

    const hashPassword  = bcrypt.hashSync(req.body.password, 12);
    await User.findOneAndUpdate( req.body.email, { pass: hashPassword,cpass: hashPassword})

    
    //await User.findOneAndUpdate( req.body.email, { pass: req.body.password,cpass: req.body.password})
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/update", async (req, res) => {
  const {
    username,
    email,
    phone,
    aphone,
    ad1,
    ad2,
    state,
    pin,
    prof,
    edq,
    cllg,
    course,
    pass,
    cpass,
    compT,
  } = req.body;
  await Registration.findOneAndUpdate( req.body.email, req.body);
  res.status(201).send({ message: "User created successfully" });
})

module.exports = router;



