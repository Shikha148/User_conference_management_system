const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
     required: true,
  },
  email: {
    type: String,
     required: true,
  },
  phone: {
    type: Number,
     required: true,
  },
  aphone: {
    type: Number,
     required: true,
  },
  ad1: {
    type: String,
     required: true,
  },
  ad2: {
    type: String,
    required: true,
  },
  state: {
    type: String,
     required: true,
  },
  pin: {
    type: Number,
     required: true,
  },
  prof: {
    type: String,
     required: true,
  },
  edq: {
    type: String,
     required: true,
  },
  cllg: {
    type: String,
     required: true,
  },
  course: {
    type: String,
    required: true,
  },
  yop: {
    type: Date,
     required: true,
  },
  cemail: {
    type: String,
  },
  cgpa: {
    type: Number,
  },
  compT: {
    type: String,
  },
  cname: {
    type: String,
  },
  ccemail: {
    type: String,
  },
  cadd: {
    type: String,
  },
  desg: {
    type: String,
  },
  yoe: {
    type: Number,
  },
  pass: {
    type: String,
    required: true,
  },
  cpass: {
    type: String,
    required: true,
  },
  sques: {
    type: String,
    required: true,
  },
  sans: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Passowrd hashing

userSchema.pre("save", async function (next) {
  if (this.isModified("pass")) {
    this.pass = bcrypt.hashSync(this.pass, 12);
    this.cpass = bcrypt.hashSync(this.cpass, 12);
  }
  next();
});

//Generating token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("REGISTRATIONS", userSchema);

module.exports = User;
