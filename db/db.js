const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arpitradadiya:XABpNF2aHhD9wwyj@cluster0.8p5oc.mongodb.net/expense-tracker')
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log(err));

module.exports = mongoose;  