const jwt = require("jsonwebtoken")

function authMiddlewire(req,res,next){
        const token = req.headers.token;
        const decoded = jwt.verify(token,"sayan123")
        if(!token){
                req.status.send({
                        message: "not find"
                })
        }

}


