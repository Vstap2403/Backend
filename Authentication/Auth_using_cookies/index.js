const express = require("express")

const app = express()
app.use(express.json())

app.get("/sayan",(req,res)=>{
        res.send({
                message: "hi"
        })
})

app.listen(3000)
