var express = require('express');
var mongoose = require('mongoose');

//Allows anything, we check for well-formed data elsewhere.
var userSchema = new mongoose.Schema({}, {strict:false});
exports.User = mongoose.model('User', userSchema);
