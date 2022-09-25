const fakeRequest =(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const rand=Math.random();
            if(rand < 0.3){
                reject({status:404});
            }else{
                resolve({status:200});
            }
        },1000)
    });
};

fakeRequest()
.then((res)=>{
    console.log('Status code',res.status);
    console.log('request work');
})
.catch((res)=>{
    console.log(res.status);
    console.log('request fails')
})