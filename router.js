const express = require('express')
const handleError = require('./middleware/error')
const { addProduct, getProducts, deleteProduct, updateProduct, getProduct } = require('./controller/product')
const { addUser, loginUser, getAllUser, getUser, updateUser, deleteUser } = require('./controller/user')
const { admin, isAuth } = require('./middleware/auth')
const { addBannerImages, getBannerImages } = require('./controller/home')
const { addOrder, getOrder, cancelOrder } = require('./controller/order')

const routes = express.Router()

routes.route('/user').get(admin,handleError(getAllUser)).post(admin,handleError(addUser))

routes.route('/user/:user_id').get(isAuth,handleError(getUser)).patch(isAuth,handleError(updateUser)).delete(admin, handleError(deleteUser))

routes.route('/product/:product_id').delete(admin,handleError(deleteProduct)).patch(admin, handleError(updateProduct)).get(handleError(getProduct))

routes.route('/product').post(admin ,handleError(addProduct)).get(handleError(getProducts))

routes.route('/login').post(handleError(loginUser))

routes.route('/register').post(handleError(addUser))

routes.route('/banner').post(admin, handleError(addBannerImages)).get(handleError(getBannerImages))

routes.route('/order/:user_id').get(isAuth, handleError(getOrder))

routes.route('/order').post(isAuth, handleError(addOrder))

routes.route('/order_cancel/:order_id').post(isAuth, handleError(cancelOrder))

module.exports =  routes