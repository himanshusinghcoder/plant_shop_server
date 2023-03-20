const { ProductModel } = require("../model/Product")

const addProduct = async (data) => {
    const result = await ProductModel.create(data)
    return result
}

const getProducts = async () => {
    const result = await ProductModel.find().sort({ createdAt: -1 })
    return result
}

const getProduct = async (id) => {
    const result = await ProductModel.findOne({_id : id}, {__v: 0, is_featured: 0, is_trending: 0})
    return result
}


const deleteProduct = async (id) => {
    await ProductModel.deleteOne({_id: id})
    return 'successfully deleted'
}

const updateProduct = async (id, data) => {
    const result = await ProductModel.updateOne({_id: id}, {$set: data})
    return result
}

const decrementProductQuantity = async (id, quantity) => {
    const res =  await ProductModel.findOneAndUpdate({ _id: id }, { $inc: { quantity : -quantity}})
    return res
}

const incrementProductQuantity = async (id, quantity) => {
    const res =  await ProductModel.findOneAndUpdate({ _id: id }, { $inc: { quantity : quantity}})
    return res
}


module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProduct,
    incrementProductQuantity,
    decrementProductQuantity
}