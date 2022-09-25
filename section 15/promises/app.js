const willGetYouADog =new Promise((resolve,reject)=>{
    const rand=Math.random();
    if(rand < 0.5){
        resolve();
    }else{
        reject();
    }
});

willGetYouADog.then(()=>{
    console.log('ye we got a dog');
})
willGetYouADog.catch(()=>{
    console.log('no dog')
})