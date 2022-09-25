async function greet(){
    return 'hello!!!';
}
greet().then((val)=>{
    console.log('Promise Resolved',val);
})


// async function add(x,y){
//     if(typeof x !=='number' || typeof y !=='number'){
//         throw 'x and y must be numbers!'
//     }
//     return x+y;
// }

function add(x,y){
    return new Promise((resolve,reject)=>{
        if(typeof x !=='number' || typeof y !=='number'){
            throw 'x and y must be numbers!'
        }
        resolve(x+y);

    })
}


add(6,7)
.then((val)=>{
    console.log('Promise resolved with:',val);

})
.catch((err)=>{
    console.log('Promise Rejected with:',err);
})