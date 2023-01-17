const { connect, connection } = require("mongoose");

connect("mongodb://localhost/nosqlSocialNetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
