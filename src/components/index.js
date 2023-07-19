const express = require('express');
const app = express();

app.post('/test', (req, res) => {
res.json('test');
});
app.listen(4000);