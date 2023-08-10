require("dotenv").config();

const mongoDBURL = process.env.MONGODB_ATLAS_URL;

module.exports = {
  mongoDBURL,
};
