const { Schema, model } = require("mongoose");

// Schema to create Post model
const reactionSchema = new Schema({
  reactionId: {},
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {},
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
