const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const animalsRoutes = require('./routes/animals.routes');
const contactsRoutes = require('./routes/contacts.routes');

const app = express();
app.use(cors());
app.use(express.json());


app.use(animalsRoutes);
app.use(contactsRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/animal_care")
  .then(() => {
    app.listen(3000, () => {
      console.log("Server started on: http://localhost:3000/");
    });
  })
  .catch(() => {
    console.log("Could not connect to database.");
  });
