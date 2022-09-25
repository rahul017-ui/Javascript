// async function getpeople(){
//     const res =await axios.get('https://swapi.dev/api/people/1/');
//     console.log(res.data); //only runs once the previous line is complete(the axios promise is resolved)
// }
// getpeople().catch((err)=>{
//     console.log("In Catch!!!");
//     console.log(err);
// })



async function getpeople(){
    try{
        const res =await axios.get('https://swapi.dev/api/people/1/');
        console.log(res.data);

    } catch(e){
        console.log('In Catch!!',e);

    }
}
getpeople();