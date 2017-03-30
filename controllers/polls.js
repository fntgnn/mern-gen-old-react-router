const mongoose = require('mongoose');
const Poll = require('../models/poll');

exports.getAllPolls = function(req, res, next){
  Poll.find({}, function(err, docs){
    if(err) { return next(err); }
    res.json(docs);
  });
}
