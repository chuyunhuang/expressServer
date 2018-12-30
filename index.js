//Import Express Library
const express = require('express');

//Initiate an Express app
let app = express();

//Define port
const port= 8000;

//Define server routh
app.get('/', (req, res)=>{
  res.send('this is the homepage')
});


//Listening
app.listen(port, () =>{
  console.log(`server is lisenting on port ${port}`)
});