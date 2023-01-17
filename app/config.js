require("dotenv").config();

module.exports = {
  // MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/electrondb",
  MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://usuario:password@cluster0.ciwqytn.mongodb.net/?retryWrites=true&w=majority",
};
