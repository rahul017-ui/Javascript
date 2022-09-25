// // const numbers=[20,21,22,23,24,25,26,27];


// // numbers.forEach(function(num,idx){
// //     console.log(idx,num * 2);
// // })


// // function printTriple(n){
// //     console.log(n * 3);
// // }

// // numbers.forEach(printTriple);



// //MAp
// const numbers=[20,21,22,23,24,25,26,27];
// const words=['asap','bob','rsvp','die'];

// // const doubles=numbers.map(function(num){
// //    return num *2;
// // })

// const numdetails=numbers.map(function(n){
//     return{
//         value:n,
//         isEven:n%2 ===0
//     }
// })

// //method hai const double2=[];
// // for (let num of numbers){
// //     double2.push(num *2)
// // }


// const abberves=words.map(function(word){
//    return word.toUpperCase().split('').join('.');
// })

//Arrow Functuion
// const square=(x)=>{
//     return x*x;
// }

// const isEven=(num)=>{
//     return num%2 ===0;
// }



//1. const square=n=>{
//     return n*n;
// }


// 2. const square = n => (
//     n*n
// )

// 3. const square = n => n*n;



// const nums=[1,2,3,4,5,6,7,8,9];

// const double=nums.map(n =>{
//     return n*2;
// })

// const double2=nums.map(n=>n*2);
 


//Find Method

// let movies =[
//     "movie1 Mr",
//     "Mr. movie2  Mrs.",
//     "Mrs. movie3",
//     "Mr. movie4",
// ]
// const movie=movies.find(movie=>{
//     return movie.includes('Mrs');
// })
// const movie2=movies.find(m=> m.indexOf('Mrs')===0
// );



// const books=[{
//     title:'good',
//     authors:['ram','ea'],
//     rating:4.25
// },{
//     title:'goa',
//     authors:['rm','eaf'],
//     rating:4.0
// },{
//     title:'god',
//     authors:['hm','ea5'],
//     rating:4.85
// },{
//     title:'bad',
//     authors:['am','eas'],
//     rating:4.11
// },{
//     title:'od',
//     authors:['rapm','eda'],
//     rating:4.95
// }]



// const goodbook =books.find(b => b.rating>=4.3)



//Filter


// const nums=[34,35,84,55,84,58,52,]



// const odds = nums.filter(n=> n%2===1);
// const evens =nums.filter(n => n%2 ===0);




// const books=[{
//     title:'good',
//     authors:['ram','ea'],
//     rating:4.25,
//     geners:['fiction','fantasy']
// },{
//     title:'goa',
//     authors:['rm','eaf'],
//     rating:4.0,
//     geners:['comedy','fantasy']
// },{
//     title:'god',
//     authors:['hm','ea5'],
//     rating:4.85,
//     geners:['nonfiction','fantasy']
// },{
//     title:'bad',
//     authors:['am','eas'],
//     rating:4.11,
//     geners:['fiction','fantasy','novel']
// },{
//     title:'od',
//     authors:['rapm','eda'],
//     rating:4.95,
//     geners:['fiction']
    

// }]


// const goodbook=books.filter(b=>b.rating>4.3)
// const fantasyBooks =books.filter(book =>(
//     book.geners.includes('fantasy')
// ))

//every

//  const words =['dog','cag','log','bag'];

//  const all3lets=words.every(word =>word.length ===3);

//  const allend=words.every(word =>{
//     const last =word.length-1;
//     return word[last] ==='g'

//  })

//  //some

//  const somestartwithd=words.some(word =>word[0] ==='d')


//Sort




// const pr=[400.50,3000,99.99,35.99,12.00,9500];

// pr.sort();


// const ascSort=pr.sort((a,b)=> a-b);
// const desSort=pr.sort((a,b)=> b-a);


///Reduce
// const nums=[3,4,5,2,6,5,8 ];

// const product =nums.reduce((total, currentVal)=>{
//     return total*currentVal;
// })



// // 
// const grade=[87,65,98,75,78,65,99,64];
// const maxgrade= grade.reduce((max,currval)=>{
//     if(currval>max) return currval;
//     return max;
// })




// const maxgrade= grade.reduce((max,currval)=>{
//    return Math.max(max,currval)
// })


// const mingrade= grade.reduce((max,currval)=>{
//     return Math.min(max,currval)
//  })