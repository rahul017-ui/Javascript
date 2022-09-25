// function sayHi(){
//     console.log('hi');
//     console.log(this);

// }

//using this method


// const person={
//     first:'rahul',
//     last:'choudhary',
//     nickname:'ram',
//     fullname(){
//         console.log(`${this.first} ${this.last} aka ${this.nickname}`);
//     }
// }


//2 way
// const person={
//     first:'rahul',
//     last:'choudhary',
//     nickname:'ram',
//     fullname(){
//         const{
//             first,
//             last,
//             nickname
//         }=this;
//         return `${first} ${last} aka ${nickname}`;
//     }
// }
