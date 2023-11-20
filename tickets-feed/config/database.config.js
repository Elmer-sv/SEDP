const Mongoose = require("mongoose");
const debug = require('debug')("app:database");

const dburi = "mongodb+srv://sed:serversed@projectsed.qp1049q.mongodb.net/feed-tickets?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await Mongoose.connect(dburi);
        debug("Connection to database started");
    } catch (error){
        console.error(error);
        debug("Cannot connect to database");
        process.exit(1);
    }
}

const disconnect = async () => {
    try {   
        await Mongoose.disconnect();
        debug("Connection to database end");
    } catch (error){
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}
