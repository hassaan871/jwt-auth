const express = require("express")
const jwt = require('jsonwebtoken')

const app = express()

const PORT = 8000
const user = {
    id: 1,
    name: "hassaan",
    password: 123
}
const SECRETKEY = "123"
const options = {
    expiresIn: '300s'
}

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/login', (req, res) => {
    if (req.body.name != user.name || req.body.password != user.password) {
        res.json({
            "error": "Invalid username or password"
        })
    } else {
        // res.json({
        //     "success": "User found"
        // })
        jwt.sign(user, SECRETKEY, options, (err, token) => {
            if (err) {
                res.json({ "Error": "Error while generating the jwt, check console" })
                console.log(`err: ${err}`);
            }
            res.json(
                // { "token": token }
                { token }
            )
            console.log(`token: ${token}`);
            // console.log(typeof token);
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})