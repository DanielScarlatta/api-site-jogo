require("dotenv").config();
require("module-alias/register");

const express = require("express");

const config = require('@config/index.js');

const boot = require('@services/boot');
const mongoose = require('mongoose');

if(config.db.connectionString) {
  mongoose.connect(config.db.connectionString)
  boot()
} else {
  console.log('No connection string provided')
}

