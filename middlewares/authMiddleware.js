const token = (req, res, next) => {

    const fullToken = req.headers['authorization']
    if (fullToken) {
        const bearer = fullToken.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else{
        res.json({"invalid-token": "No login because found no token"})
    }
}

module.exports = token;