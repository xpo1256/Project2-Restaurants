const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const cookie = require('cookie-parser')

const userRoute = require('./controllers/userRoute')
const adminRoute = require("./controllers/AdminRoute");

const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cookie())

app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.static('public'))
app.use(morgan('combined'))
app.use('/adminroute', adminRoute)

app.get('/test', (req, res) => {
  res.send('Test route is working!')
})

app.use('/dishly', userRoute);
app.use('/dishly', adminRoute);

module.exports = app
