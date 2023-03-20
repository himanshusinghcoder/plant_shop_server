const { HomeModel } = require("../model/Home")

const getBannerImage = async () => {
    const result = await HomeModel.findOne({id: 1})
    return result
}

const addBannerImage = async (data) => {
    const result = await HomeModel.findOneAndUpdate({id: 1}, data, {new: true, upsert: true})
    return result
}





module.exports = {
    getBannerImage,
    addBannerImage,
}

