const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const dotenv = require("dotenv");
const productRoute = require('./routes/product.route.js');


dotenv.config();

//middleware
app.use(express.json());

//mongodb passkey
const MONGODB_URI = process.env.MONGODB_URI;
//PORT
const PORT = process.env.PORT || 3000

//routes
app.use('/api/products',productRoute)

mongoose
  .connect(
    MONGODB_URI
  )
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});



// console.log(process.env.DB_PASS)
