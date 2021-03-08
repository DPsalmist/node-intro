//setup the express framework
const express = require('express')
//setup router
const router = express.Router()

router.get('/', (req, res, next) =>{
	res.send('Hello from routes folder!')
})

router.get('/home', (req, res, next) => {
	res.render('home', null)
})

router.get('/json', (req, res, next) => {
	const data = {
		'greeeting':'Ekaaro ni beyen o',
		'response':'oooo, se dada le ji?'
	}
	res.json(data)
})

// export router
module.exports = router