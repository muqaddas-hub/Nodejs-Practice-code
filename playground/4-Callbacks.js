function add(val1, val2, callback){
    setTimeout(() => {
        sum = val1 + val2;
        callback(sum)
    }, 2000);
}

add(1,4,(sum)=>{
    console.log(sum);
})