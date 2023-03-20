const { addOrderService, getOrders, cancelOrderService } = require("../services/order")

const addOrder = async (req, res) => {
    const data = req.body
    const result = await addOrderService(data)
    res.json({status: 'success', data: result, message: 'Order Placed Successfully'})
}

const getOrder = async (req, res) => {
    const { user_id } = req.params
    const result = await getOrders(user_id)
    res.json({status: 'success', data: result})
}

const cancelOrder = async (req, res) => {
    const {order_id} = req.params
    const data = req.body
    const result = await cancelOrderService(order_id, data)
    res.json({status: 'success', message: result})
}



module.exports = {
    addOrder,
    getOrder,
    cancelOrder
}