const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:UserId").get(getSingleUser);

module.exports = router;
