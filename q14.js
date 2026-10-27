function Order(payment){
    return new Promise((resolve,reject)=>{
        if(payment){
            resolve("name:Laptop ,price:2000,availability:yess")
        }
        else{
            reject("Error")
        }
    })
}
Order(true).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})