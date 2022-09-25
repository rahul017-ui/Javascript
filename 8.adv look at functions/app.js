



//Block scope




// if(true){
//     var ani="kefv";
//     console.log(ani);
// }
// console.log(ani);


// block scope
// function doublearr(arr){
//     const result =[];
//     for(let num of arr){
//         var double=num * 2;
//         result.push(double);
//     }
//     console.log(double);
//     return result;
// }



//lexical scope

// function outer(){
//     let movie ="home alone";
//     function inner(){
//         console.log(movie.toUpperCase())
//     }
//     inner()
// }



//function expression


// function add(x,y){
//     return x+y;

// }


// const sum =function(x,y){
//     return x+y;
// }





//higher order function



// function add(x,y){
//     return x+y;
// }
// const sub=function (x,y){
//     return x-y;
// }
// function multiply(x,y){
//     return x*y;
// }
// const divide=function (x,y){
//     return x/y;
// }


// const operation=[add,sub,multiply,divide];

// for(let func of operation){
//    let result=func(30,5)
//    console.log(result);
// }




//function as arguments

// function call(f){
//     f();
//     f();
//     f();
// }
// function cry(){
//     console.log("boo hoo")
// }


///function as return value


// function multiplyby(num){
//     return function(x){
//         return x*num;
//     }
// }
// const triple=multiplyby(3);
// const double=multiplyby(2);



// function makebt(x,y){
//     return function (num){
//         return  num>=x && num<=y;
//     }
// }

// const ischild =makebt(0,18);
// const isninteen=makebt(1990,2000);

//callbacks


// function grump(){
//     alert("go away!")
// }
// setTimeout(grump,5000)

// setTimeout(function(){
//     alert("Welcome!");
// },5000);



// const btn=document.querySelector('button');
// btn.addEventListener('click',function(){
//     alert("why did you click me!!")
// })


//hoisting


//for Each

// const nums=[20,21,22,23,24,25,26,27];

// nums.forEach(function(num){
//     console.log(num);
// })