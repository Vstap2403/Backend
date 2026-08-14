const express = require("express")
const {authMiddlewire} = require("./middlewire")
const jwt
const {todoModel, UserModel} = require("./models")
const app = express()
app.use(express.json())


// migrating all data from in memory to database
// let current_ID = 1;
// let current_Todo_ID = 1;

// let Users = []
// let Todos = []



app.post("/signip",(req,res)=>{
        const username = req.body.username
        const password = req.body.password

        // const existingUser = Users.find(u => u.username === username && u.password === password)
        const existingUser = await UserModel.findOne({

        })
        const newUser = UserModel.create({
                username: username,
                password: password
        })
        res.json({
                id:newUser._id
        })

})

app.post("/todo",(req,res)=>{
        const userId = req.userId;
        const title = req.body.title;
        const description = req.body.description

        todo.push({
                id: CURRECT_TODO_ID++,
                title: title,
                description: description,
                userId: userId
        })
        res.json({
                message: "Todo make"
        })
})

app.delete("/todo/:todoId", authMiddlewire, (req,res)=>{
        const userId = req.userId
        const todoId = req.params.todoId;

        const doesUserOwnTodo = Todos.find()
        if(!doesUserOwnTodo){
                Todos = Todos.filter(t => t.id === userId && t.todoId === todoId)
        }
        
})

app.listen(3000);