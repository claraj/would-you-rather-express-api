const express = require('express')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')

// Create the web application
const app = express() 

// make the routes in index.js available to the app 
app.use('/', indexRouter)

// Start server running 

const port = process.env.PORT || 3000
const server = app.listen(port, function() {
    console.log('Express server running on port', port)
})



