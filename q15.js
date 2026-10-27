function shopping(task){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(task){
                resolve("Shopping Completed")
            }
            else{
                reject("not done")

            }

        },4000)
    })
}
async function test(task){
    try{
    const data=await shopping(task);
    
    console.log(data);
    }
    catch(err){
        console.log(err);

    }

}
test(true);
