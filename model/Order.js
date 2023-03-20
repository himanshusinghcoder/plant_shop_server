const { model, Schema } = require("../config/mongo_config")

ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
    user_id: {
        type: ObjectId,
        require: true,
    },
    products: {
        type: Array,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    phone_number: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: 'Ordered'
    },
    price_breakup: {
        type: Object,
        require: true,
    },
    delivery_data: {
        type: String,
        require: true
    }
},{timestamps: true}) 


const OrderModel = model('order', orderSchema)

module.exports = {
    OrderModel
}