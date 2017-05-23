var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/social', () => {
    console.log('mongodb is connected');
})
module.exports = mongoose;