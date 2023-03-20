const { addProductService, getProductService, deleteProductService, updateProductService, getProductsService } = require("../services/product")

const addProduct = async (req,res) => {
    const data = req.body
    const result = await addProductService(data)
    res.json({status: 'success', data: result})
}

const getProducts = async (req,res) => {
    const data = req.body
    const result = await getProductsService(data)
    res.json({status: 'success', data: result})
}

const deleteProduct = async (req, res) => {
    const { product_id } = req.params
    const result = await deleteProductService(product_id)
    res.json({status: 'success', data: result})
}

const updateProduct = async (req, res) => {
    const { product_id } = req.params
    const data = req.body
    const result = await updateProductService(product_id, data)
    res.json({status: 'success', data: result, message: 'update successfully'})
}

const getProduct = async (req, res) => {
    const { product_id } = req.params
    const result = await getProductService(product_id)
    res.json({status: 'success', data: result})
}


module.exports = {
    addProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    getProduct
}