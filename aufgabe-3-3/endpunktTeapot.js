const express = require('express');
const app = express();
const port = 3000;

app.get('/teapot', (req, res) => {
  res.send('Hallo Welt!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
