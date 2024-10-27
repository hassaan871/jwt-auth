const express = require("express")

const app = express()

const PORT = 8000
const user = {
    id: 1,
    name: "hassaan",
    password: 123
}

app.use(express.urlencoded({extended: false}))

app.get('/',(req, res) => {
    res.send("Hello")
})

app.post('/login',(req, res) => {
    if(req.body.name != user.name || req.body.password != user.password){
        res.json({
            "error": "Invalid username or password"
        })
    }else{
        res.json({
            "success": "User found"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`)
})