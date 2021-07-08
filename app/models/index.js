import { url } from "../config/db.config.js";

import mongoose, { Promise } from "mongoose";
Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.tutorials = require("./tutorial.model.js")(mongoose);

export default db;