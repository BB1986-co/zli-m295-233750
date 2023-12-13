let zahlen = process.argv.slice(2).map(Number).slice(0, 3);

let summe = 0;

zahlen.forEach(zahl => {
    summe += zahl;
});
console.log(summe);


