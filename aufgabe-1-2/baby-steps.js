let index = 2;
let sum = 0;
argv = ['/usr/local/bin/node',
'/workspaces/zli-m295-233750/aufgabe-1-2/baby-steps.js', '1','2','3'];

while(process.argv[index]){
    sum = sum + Number(process.argv[index]);
    ++index;
}

console.log(sum);

