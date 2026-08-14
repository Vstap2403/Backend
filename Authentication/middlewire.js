const jwt = require("jsonwebtoken")

//access keys and refresh keys
function authmiddleware(req,res,next){
        const token = req.headers.token; //client sends this req message to backend and in this message header part there is a token part
        if(!token){
                res.status(403).send({
                        message: "you are not logged in"
                })
                return 
        }
        const decoded = jwt.verify(token, "harkirat123")
        const username = decoded.username

        if(!username){
                res.status(403).json({
                        message: "not found username"
                })
                return
        }

        req.username = username

        next()
}

module.exports = {
        authmiddleware
}