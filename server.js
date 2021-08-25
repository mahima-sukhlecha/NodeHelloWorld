var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
swaggerDocument = require('./swagger.json');





app.get("/", (req, res) => {
  res.send("Authentication Flow Works")
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;




//app.get('/home',checkToken , sample)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
