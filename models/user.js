const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // attributes for app users
});

mongoose.model('users', userSchema);
 
