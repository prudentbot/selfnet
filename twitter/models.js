var express = require('express');
var mongoose = require('mongoose');

exports.person = mongoose.model('Person',
{
  username: String,
  url: String
});
