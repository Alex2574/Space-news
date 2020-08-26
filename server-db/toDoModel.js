const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false
  },
});

const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = { ToDo };
