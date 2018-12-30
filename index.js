const math = require('./services/math')
//Import Express Library
const express = require('express');

//Initiate an Express app
let app = express();

//Define port
const port = 8000;

//Define server routh
app.get('/', (req, res) => {
  res.send('this is the homepage')
});

app.get('/math/add', (req, res) => {
  let value = Object.values(req.query)
  res.send({
    input: req.query,
    result: math.getSum(value),
  })
});

app.get('/math/subtract', (req, res) => {
  let value = Object.values(req.query)
  res.send({
    input: req.query,
    result: `subtracting 1st element - 2nd element:${math.subtract(value)}`,
  })
});

app.get('/math/multiply', (req, res) => {
  let value = Object.values(req.query)
  res.send({
    input: req.query,
    result: math.multiply(value),
  })
})

app.get('/math/divide', (req, res) => {
  let value = Object.values(req.query)
  res.send({
    input:req.query,
    result: math.divide(value),
  })
})


//Listening
app.listen(port, () => {
  console.log(`server is lisenting on port ${port}`)
});