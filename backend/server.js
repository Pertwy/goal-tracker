const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const goalsRouter = require('./routes/goals')
const diaryEntrysRouter = require('./routes/diaryEntrys')
const testRouter = require('./routes/test')
app.use('/goals', goalsRouter)
app.use('/diaryEntrys', diaryEntrysRouter)
app.use('/test', testRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})