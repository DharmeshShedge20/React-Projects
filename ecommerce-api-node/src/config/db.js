const mongoose = require("mongoose");

const mondbUrl =
  "mongodb+srv://dharmeshshedge5:D2DHuyyUyoJGND7U@cluster0.k9dl4a7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  return mongoose.connect(mondbUrl);
};

module.exports = { connectDb };
