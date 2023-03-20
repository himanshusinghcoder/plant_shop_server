const { model, Schema } = require("../config/mongo_config")

const HomeSchema = new Schema({
    banner: {
        type: Array,
        require: true,
    },
    id: {
        type: Number,
        default: 1
    }
},{timestamps: true}) 


const HomeModel = model('home', HomeSchema)

module.exports = {
    HomeModel
}