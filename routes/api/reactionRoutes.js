const router = require("express").Router();
const {
  getSingleReaction,
  getReactions,
  createReaction,
} = require("../../controllers/reactionController");

router.route("/").get(getReactions).post(createReaction);

router.route("/:reactionId").get(getSingleReaction);

module.exports = router;
