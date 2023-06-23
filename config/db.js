const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://<username>:<password>@cluster0.scomu1s.mongodb.net/<database>?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Database Connected')
    } catch (error) {
        console.log('Error while connecting' + error.message);
    }
};

module.exports = connectDB;