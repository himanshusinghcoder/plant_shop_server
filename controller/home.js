const { addBannerImage, getBannerImage } = require("../dao/home")


const getBannerImages = async (req, res) => {
    const result = await getBannerImage()
    res.json({status: 'success', data: result})
}

const addBannerImages = async (req, res) => {
    const data = req.body
    const result = await addBannerImage(data)
    res.json({status: 'success', data: result, message: 'Banner Added Successfully'})
}

module.exports = {
    getBannerImages,
    addBannerImages,
}

