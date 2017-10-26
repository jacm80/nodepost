var Schema = require('mongoose').Schema

var nodePost = new Schema({
  id           :   Number,
  title        :   String,
  author       :   String,
  date         :   String
});

export default nodePost;