const express = require("express")
const jsonwebtoken = require("jsonwebtoken")

const app = express()
app.use(express.json());



const notes = [] //this is a bad syntax
const user = []

//post - create a new note

app.post("/signup",function(req,res){
        const username = req.body.username;
        const password = req.body.password;
        const userExists = user.find(user => user.username === username);
        if(userExists){
                return res.status(403).json({
                        message: "user with this username already exists"
                })
        }
        user.push({
                username: username,
                password:password
        })
})

app.post("/signin", function(req,res){
        const username = req.body.username
        const password = req.body.password

        const userExists = user.find(user => user.username === username && user.password === password)

        if(!userExists){
                res.status(403).json({
                        message: "Incorrect credential"
                })
                return
        }

        //json web token 

        const token = jwt.sign({
                username: username
        }, "harkirat123")
        res.json({
                token: token
        })
})


app.post("/notes",(req,res)=>{
        //check if they have sent the right header, extract who this user is from the header
        const token = req.headers.token;

        if(!token){
                res.status(403).send({
                        message:"you are not logged in"
                })
                return
        }

        const decoded = jwt.verify(token,"harkirat123")
        const username = decoded.username

        if(!username){
                res.status(403).json({

                })
        }
        const note = req.body.note;
        notes.push(note)

        res.json({
                message : "Done"
        })
})

app.get("/notes",(req,res)=>{

        const token = req.headers.token;
        if(!token){
                res.status(403).send({
                        message:"you are not logged in"
                })
                return
        }

        const decoded = jwt.verify(token,"harkirat123")
        const username = decoded.username

        if(!username){
                res.status(403).json({
                        message: "failed"
                })
        }      
        res.json({
                notes: 
        })
})

app.get("/",(req,res)=>{
        res.sendFile()
})

app.get



app.listen(3000)


//frontend 

/**
 * using axios to fetch data from the backend
 * const response = await axios.get("")
 * console.log(response.data.notes);
 */