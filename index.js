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
const DB_PASS = process.env.DB_PASS;

//routes
app.use('/api/products',productRoute)

mongoose
  .connect(
    `mongodb+srv://waghatharva14:${DB_PASS}@cluster0.c2jhy.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});



// console.log(process.env.DB_PASS)
