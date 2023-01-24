
async function dadPromise(){
try{
    const dadPromise =await new Promise((resolve,reject) => {
    new setTimeout(() =>{
        var salaryCredited=true;
        var salary=10000;
        var costofPs4=40000;
        var costofPs3=30000;

        if (salaryCredited==true && salary>costofPs4){
            resolve('Buy him a ps4')

        }else{
            reject('sorry sone i willtry next month')
        }
    },1000);

    });

}catch(err){
    console.log(err)
}
}

dadPromise();