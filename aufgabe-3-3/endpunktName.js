const express = require('express');
const app = express();
const port = 3000;
const names = ['Max','Moritz','Julia','Remo','Peter','Lisa','Emma','Joline','Rico','Hannes','Anastasia','Marco','Luca'];

app.get('/name', (request, response) => {
  var rnName = randomName();
  express.response.send(rnName);
});

function randomName(names){
    var randomName = Math.random(names);
    return randomName;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

