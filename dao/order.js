const { OrderModel } = require("../model/Order")

const addOrder = async (data) => {
    try {
        const result = await OrderModel.create(data)
        return result    
    } catch (error) {
        throw new Error('Please fill all the fields')
    }
}

const updateOrder = () => {

}

const cancelOrder = async (id) => {
    await OrderModel.updateOne({_id: id}, {$set : {status: 'Cancelled'}})
    return 'Order Cancel successfully'
}

const getOrder =  async (id) => {
    const result = await OrderModel.find({user_id: id}).sort({createdAt: -1})
    return result
}

module.exports = {
    addOrder,
    updateOrder,
    cancelOrder,
    getOrder
}

