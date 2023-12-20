function doubleNumber(zahl,callback){
    setTimeout(()=>{
        const sum = zahl * 2;
        callback(sum);
    }, 1000);
}

doubleNumber(5,(sum)=>{
    console.log(sum);
});
