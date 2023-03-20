const { OrderModel } = require("../model/Order")
const { UserModel } = require("../model/User")

const addUser = async (data) => {
    try {
        const result = await UserModel.create(data)
        return result
    } catch (error) {
        throw new Error('User already exist with this username')
    }
}

const findUser = async (condition , isPassword = 0) => {
    const data = {}
    if(!isPassword){
        data.password = 0
        data.__v = 0

    }
    const result = await UserModel.findOne(condition, data)
    return result
}

const getAllUser = async () => {
    const result = await UserModel.find()
    return result
}

const updateUser = async (id, data) => {
    const result = await UserModel.updateOne({_id: id}, {$set: data})
    return result
}

const deleteUser = async (id) => {
    const result = await UserModel.deleteOne({_id: id})
    return result
}

module.exports = {
    addUser,
    findUser,
    getAllUser,
    updateUser,
    deleteUser
}