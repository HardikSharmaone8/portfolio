var mongoose = require("mongoose");
require("dotenv");

mongoose
    .connect(
        process.env.MONGODB_URL || "mongodb://localhost:27017/portfoliodatabase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connection with database established Succesfully");
    })
    .catch((err) => {
        console.log("Error Occured white database connection" + err);
    });