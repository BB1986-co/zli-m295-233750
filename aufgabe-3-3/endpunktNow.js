
const express = require('express');
//const fs = requrie('fs');
const app = express();
const port = 3000;

app.get('/now', (request, response) => {

  const now = new Date().toLocaleTimeString()
  response.send(`Es ist gerade: ${now}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});