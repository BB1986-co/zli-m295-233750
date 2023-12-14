const express = require('express');
const app = express();
const port = 3000;

app.get('/:postleitzahl', (request, response) => {
    const plz = request.params.postleitzahl;
     
  response.send(plz);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

