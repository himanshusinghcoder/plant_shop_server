const bcrypt = require('bcrypt');
const { addUser, findUser, updateUser, deleteUser } = require('../dao/user');
const { isEmpty } = require('lodash');
const jwt = require('jsonwebtoken');

const addUserService = async (data) => {
    const password = await bcrypt.hash(data.password, 10)
    data.password = password
    const result = await addUser(data)
    return result
}

const loginUserService = async (data) => {
    const user = await findUser({ username: data.username }, 1)
    if (isEmpty(user)) {
        throw new Error('No User Associated with this username')
    }
    const matchPassword = await bcrypt.compare(data.password, user.password)
    if (!matchPassword) {
        throw new Error('Password is not correct')
    }
    const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY)
    return { access_level: user.access_level, token: token, username: user.username, wishlist: user.user_wishlist, cart: user.user_cart, id: user._id}
}

const getUserData = async (id) => {
    const result = await findUser({ _id: id })
    return result
}

const updateUserService = async (id, data) => {
    const result = await updateUser(id, data)
    return result
}

const deleteUserService = async (id) => {
    const result = await deleteUser(id)
    return result
}

module.exports = {
    addUserService,
    loginUserService,
    getUserData,
    updateUserService,
    deleteUserService
}