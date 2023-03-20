const { addOrder, getOrder, cancelOrder } = require("../dao/order")
const { decrementProductQuantity, incrementProductQuantity } = require("../dao/product")
const { updateUserService } = require("./user")

const addOrderService = async (data) => {
    for (const iterator of data.products) {
        await decrementProductQuantity(iterator._id, iterator.quantity)
    }
    await updateUserService(data.user_id, {user_cart: []})
    const result = await addOrder(data)
    return result
}

const getOrders = async (id) => {
    const result = await getOrder(id)
    return result
}

const cancelOrderService = async (id, data) => {
    for (const iterator of data.products) {
        await incrementProductQuantity(iterator._id, iterator.quantity)
    }
    const result = await cancelOrder(id)
    return result
} 



module.exports = {
    addOrderService,
    getOrders,
    cancelOrderService
}