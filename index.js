const express = require("express")
const path = require("path")

const app = express();



//write code here if don't want to apply middlewire
//middlewire
app.use(express.json()) //----1st middlewire

app.use(function(req,res,next){ //-----2nd middlewire
        console.log("hi")
        next()
})

app.use(function increaseCount(){ //first move here then next handler
        requestCount++
        next() //untill it is not called the code never reach next handler
}) //applied to all the handlers

// app.get("/add",(req,res,next) =>{

//}, //middlewire
// function(req,res){
//         const a = parseInt(req.query.a)
//         const b = parseInt(req.query.b)

//         const sum = a+b
//         res.send(sum.toString())
// }) //-----custom middlewire

//http://localhost:3002/sum?a=1&b=2
app.get("/sum",function(req,res){
        const a = parseInt(req.query.a); //string
        const b = parseInt(req.query.b); //string

        const sum = a + b;
        // res.json({
        //         ans: sum
        // })

        res.send(sum.toString())

})
// http://localhost:3002/sum/1200/2
app.get("/sum/:firstNum/:secNum",(req,res)=>{
        const a = parseInt(req.params.a)
        const b = parseInt(req.params.b)

        const sum = a + b;
        res.send(sum.toString())
})

app.post("/sum",function(req,res){
        const a = parseInt(req.body.a);
        const b = parseInt(req.body.b);

        const sum = a + b;

        res.json({
                ans: sum
        })
})
app.get("/",function(req,res){
        res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/status",function(req,res){
        res.send("up")
})
app.get("/requestCount",function(req,res){
        // requestCount++
        res.send({
                requestCount
        })
})
app.get("/sub")
app.get("/mul")
app.get("/div")

//evry thing 
app.listen(3002)


