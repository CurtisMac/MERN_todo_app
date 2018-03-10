const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tododb');
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to db at 'mongodb://localhost:27017/tododb'")
});

module.exports = db