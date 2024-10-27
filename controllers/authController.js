const jwt = require('jsonwebtoken')
const user = {
    id: 1,
    name: "hassaan",
    password: 123
}
const SECRETKEY = "123"
const options = {
    expiresIn: '300s'
}



const login = (req, res) => {
    if (req.body.name != user.name || req.body.password != user.password) {
        res.json({
            "error": "Invalid username or password"
        })
    } else {
        jwt.sign(user, SECRETKEY, options, (err, token) => {
            if (err) {
                res.json({ "Error": "Error while generating the jwt, check console" })
                console.log(`err: ${err}`);
            }
            res.json(
                { token }
            )
            console.log(`token: ${token}`);
        })
    }
}

const protectedRoute = (req, res) => { 
    jwt.verify(req.token, SECRETKEY, (err, authData) => {
        if(err){
            res.json({"error":"Invalid JWT"})
        }else{
            res.json({
                Message:'Post created...',
                authData
            })
        }
    })
}

module.exports = {login, protectedRoute}