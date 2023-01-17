const { Schema, model } = require("mongoose");
const { stringify } = require("querystring");

// Schema for what makes up a comment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  thoughts: {},
  friends: {},
});

userSchema.virtual("friendCount").get().set();

const User = model("user", userSchema);

module.exports = User;
