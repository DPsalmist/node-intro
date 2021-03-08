//setup the express framework
const express = require('express')
//set up the views directory
const path = require('path')
const hoganMiddleware = require('hogan-middleware')
// creating an handler for express
const app = express()

//setup path for views dir.
app.set('views', path.join(__dirname, 'views'))
//setup for view engine to mustache
app.set('view engine', 'mustache')
//configure mustache engine template for express.
//app.engine('mustache', require('hogan-middleware').__express) //mtd 1
app.engine('mustache', hoganMiddleware.__express) // mtd 2
//configure express to use static
app.use(express.static(path.join(__dirname, 'public')))

// create a request handler with three args/objects
// app.get('/', (req, res, next) => {
// 	res.send('Hello World!')
// })
// create a json response
// app.get('/json', (req, res, next) => {
// 	const data = {
// 		'greeeting':'How far?'
// 	}
// 	res.json(data)
// })
//views route for the mustache templates
// app.get('/home', (req, res, next) => {
// 	res.render('home', null)
// })

//setup routes to handle route requests
const indexRouter = require('./routes/index')
//configure initial route
app.use('/', indexRouter)

// connect app to the server on port 3000
app.listen(3000) 
console.log('Server running on http:localhost:3000')