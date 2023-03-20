const mongoose = require('mongoose');

mongoose.set("strictQuery", false);


const connectToMongo = async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_SERVER_URL}`)
       console.log("<-<-<-<-<-<-<-<- mongoDb successfully connected ->->->->->->->->");
    } catch (error) {
        console.log(">>>>>>>error", error);
    }
}

connectToMongo()

const { Schema, model } = mongoose

module.exports = {
    Schema, model
}