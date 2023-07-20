const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  //const {userName, password} = req.body;
  //res.json({requestData:{userName, password}});
  res.json('test');

});
app.listen(4000);