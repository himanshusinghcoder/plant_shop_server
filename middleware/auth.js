const jwt = require('jsonwebtoken');

const admin = async (req, res, next) => {
    const { access_token } = req.headers
    try {
        const data = await jwt.verify(access_token, process.env.JWT_SECRET_KEY)
        const { user: {access_level} } = data
        if(access_level === 100){
            next()
        }else{
            res.status(401).json({error: 'You are not authorized', status: 'fail'})
        }
    } catch (error) {
        res.status(401).json({error: 'You are not Authenticated', status: 'fail'})   
    }
}

const isAuth = async (req, res, next) => {
    const { access_token } = req.headers
    try {
        const data = await jwt.verify(access_token, process.env.JWT_SECRET_KEY)
        const { user } = data
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({error: 'You are not Authenticated', status: 'fail'})   
    }
}


module.exports = {
    admin,
    isAuth
}