const { getAllUserService } = require("../services/product")
const { addUserService, loginUserService, getUserData, updateUserService, deleteUserService } = require("../services/user")

const addUser = async (req, res) => {
    const data = req.body
    const result = await addUserService(data)
    res.json({status: 'success', data: result}) 
}

const loginUser = async (req, res) => {
    const data = req.body
    const result = await loginUserService(data)
    res.json({status: 'success', data: result})
}

const getAllUser = async (req,res) => {
    const result = await getAllUserService()
    res.json({status: 'success', data: result})
}

const getUser = async (req, res) => {
    const {user_id} = req.params
    const result =  await getUserData(user_id)
    res.json({status: 'success', data: result})
}

const updateUser = async (req, res) => {
    const {user_id} = req.params
    const data = req.body
    await updateUserService(user_id, data)
    res.json({status: 'success'})
}

const deleteUser = async (req, res) => {
    const {user_id} = req.params
    await deleteUserService(user_id)
    res.json({status: 'success', message: 'user successfully delete'})
}

module.exports = {
    addUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}