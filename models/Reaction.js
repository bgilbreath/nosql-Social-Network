const { Schema, model } = require("mongoose");

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
