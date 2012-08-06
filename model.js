var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/firstapp');

function validator(v) {
  return v.length > 0
}

var Post = new mongoose.Schema({
  text: { type: String, validate: [validator, "Empty Error"] },
  created: { type: Date, default: Date.now }
});

exports.Post = db.model('Post', Post);