const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {},
  username: {
    type: String,
    required: true,
  },
  reactions: {},
});

thoughtSchema.virtual("reactionCount").get().set();

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
