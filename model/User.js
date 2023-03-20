const { model, Schema } = require("../config/mongo_config")

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    access_level: {
        type: Number,
        require: true,
        default: 20
    },
    address: {
        type: String,
    },
    user_cart: {
        type: Array
    },
    user_wishlist: {
        type: Array
    },
    image: {
        type: String
    },
},{timestamps: true}) 


const UserModel = model('user', userSchema)

module.exports = {
    UserModel
}