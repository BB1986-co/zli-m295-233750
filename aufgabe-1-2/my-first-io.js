const fs = require('fs');
const file = '/usr/local/bin/node/workspaces/zli-m295-233750/aufgabe-1-2/note.txt';

file = process.argv[2];


fs.readFile(file,  function(err,contents){
    if(err){
        return console.log(err);
    }

    const lines = contents.toString().split('\n').length -1;
    console.log(lines);
})