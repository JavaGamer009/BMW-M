const express = require('express')
const app = express()
const path = require('path')


const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', "index.html"))
})

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', "support.html"))
});

// Bu yerdan boshlab Modellar qo'yilgan

app.get('/M8', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'M8.html'))
})

app.get('/M5', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'M5.html'))
})

app.get('/M4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'M4.html'))
})

app.get('/M3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'M3.html'))
})

app.listen(PORT, () => {
    console.log(`${PORT} port is running`)
})