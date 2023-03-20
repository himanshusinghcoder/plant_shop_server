const { getAllUserService } = require("../services/product")
const { addUserService, loginUserService, getUserData, updateUserService, deleteUserService } = require("../services/user")

const addUser = async (req, res) => {
    const data = req.body
    const result = await addUserService(data)
    res.json({status: 'success', data: result, message: 'user added success'}) 
}

const loginUser = async (req, res) => {
    const data = req.body
    const result = await loginUserService(data)
    res.json({status: 'success', data: result, message: 'Login Successfully'})
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
    res.json({status: 'success', message: 'User Updated Successfully'})
}

const deleteUser = async (req, res) => {
    const {user_id} = req.params
    await deleteUserService(user_id)
    res.json({status: 'success', message: 'User Successfully Delete'})
}

module.exports = {
    addUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}