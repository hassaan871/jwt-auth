const express = require("express")
const app = express()
const helloRoute = require('./routes/helloRoute')
const authRoutes = require('./routes/authRoutes')

const PORT = 8000

//Middlewares
app.use(express.urlencoded({ extended: false }))

app.use('/', helloRoute)

app.use('/api', authRoutes)
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})