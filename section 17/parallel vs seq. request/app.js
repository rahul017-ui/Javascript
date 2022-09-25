// //SEQUENTIAL REQUEST
// async function getfilm(){
//     const film= await axios.get('https://swapi.dev/api/films/1/')
//     const film1= await axios.get('https://swapi.dev/api/films/1/')
//     const film2= await axios.get('https://swapi.dev/api/films/1/')
//     console.log(film.data);
//     console.log(film1.data);
//     console.log(film2.data);

// }

// getfilm();


// async function getfilm(){
//     const film=  axios.get('https://swapi.dev/api/films/1/')
//     const film1= axios.get('https://swapi.dev/api/films/1/')
//     const film2= axios.get('https://swapi.dev/api/films/1/')
//     console.log(film);
//     const fm=await film;
//     const fm1=await film1;
//     const fm2=await film2;
//     console.log(fm.data);
//     console.log(fm1.data);
//     console.log(fm2.data);
//     console.log(film);


// }

// getfilm();

// function changebodycolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             document.body.style.backgroundColor =color;
//             resolve();
            
//         }, delay);
//     })
// }


// async function lightShow(){
//     await changebodycolor('teal',1000);
//     await changebodycolor('green',1000);
//     await changebodycolor('indigo',1000);
//     await changebodycolor('violet',1000);
// }

// async function lightShow(){
// const p1=changebodycolor('teal',1000);
// const p2=changebodycolor('green',1000);
// const p3=changebodycolor('indigo',1000);
// const p4=changebodycolor('violet',1000);

// await p1;
// await p2;
// await p3;
// await p4;

// }


// lightShow();


//parallel requests

async function getfilm(){
    const film=  axios.get('https://swapi.dev/api/films/1/')
    const film1= axios.get('https://swapi.dev/api/films/1/')
    const film2= axios.get('https://swapi.dev/api/films/1/')
    
    const results=Promise.all([film,film1,film2]);
    printFilm(results);

}

function printFilm(results){
    for (let film of results){
        console.log(film.data);

    }
}



getfilm();