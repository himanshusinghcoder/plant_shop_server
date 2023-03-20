const { model, Schema } = require("../config/mongo_config")

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    image: {
        type: Array,
        require: true,
    },
    discount: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    is_trending: {
        type: Boolean,
        default: false
    },
},{timestamps: true}) 


const ProductModel = model('product', productSchema)

module.exports = {
    ProductModel
}