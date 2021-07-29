
const express = require('express')
const path = require('path')

const app = express()


app.use(express.static('public'))

app.use('/public', express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT||5050


app.listen(port, ()=> console.log(`Server running on ${5050}`))

