function checkPass(avg){
    if(avg>=40){
        return  `pass`
    }else{
        return `fail`
    }
}
console.log(checkPass(60))