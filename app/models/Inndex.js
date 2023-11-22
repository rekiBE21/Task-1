const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./Userr");
db.role = require("./Roole");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;