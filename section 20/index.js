const fetchData =async ()=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:'9be55940',
            s:'avengers'
        }
    });
    console.log(response.data);
}; 
fetchData();