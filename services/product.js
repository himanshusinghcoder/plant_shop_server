const { addProduct, getProducts, deleteProduct, updateProduct, getProduct } = require("../dao/product")
const { getAllUser } = require("../dao/user")

const addProductService =  async (data) => {
    const result = await addProduct(data)
    return result
}

const getProductsService =  async () => {
    const result = await getProducts()
    return result
}

const deleteProductService = async (id) => {
    const result = await deleteProduct(id)
    return result
}

const getAllUserService = async () => {
    const result = await getAllUser()
    return result
}

const updateProductService = async (id, data) => {
    const result  = await updateProduct(id, data)
    return result
}

const getProductService = async (id) => {
    const result  = await getProduct(id)
    return result
}

module.exports = {
    addProductService,
    getProductService,
    deleteProductService,
    getAllUserService,
    updateProductService,
    getProductsService
}