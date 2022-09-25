if(1!==1){
   console.log("it is true")
 }


//emamp
let rating =5;
if(rating===3){
    console.log('you are a ')
}
else if(rating===2){
    console.log("meet");
}
else if(rating===1){
    console.log("neew improvement");
}
else{
    console.log("INVALID")
}

//ema
let num =37;

if(num %2 !==0){
    console.log("odd number")
}

let highScore=1430;
let userScore=1200;
if(userScore>=highScore){
    console.log(`you have a high score ${userScore}`)
}
else{
    console.log(`your score of ${userScore} di not beat the high score of ${highScore}`)
}



let password="rahu65656   l";

if(password.length >=6){
    if(password.indexOf(' ')===-1){
        console.log("valid password");
    }
    else {
        console.log('passwprd  is long enough,but cannot conatin spaces');
    }
 
}
else{
    console.log("password must bi longer")
}

let rahul="mhdbse";
if(rahul){
    console.log('TRUTHY');
}
else{
    console.log('FALSY')
}




// let password ="rarradkbv";
// if(password.length >=8 && password.indexOf(' ')===-1){
//     console.log('VALID PASSWORD');
// }
// else{
//     console.log("INVALID PASS")
//}


let age =6;
if(age<= 6 || age >=65){
    console.log('you get in for free')

}
else{
    console.log("ypu must pay")
}



let loggeduser;


if(!loggeduser){
    console.log("get out");

}
let flavour ="grape";

if(flavour !=='grape' || flavour !=='cherry'){
    console.log('we have that flavour')
}


let day =5;
switch(day){
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
        

    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSADY");
        break;
        

    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
        default:
            console.log("invalid")
}

// let statu="offline";


//  let color;

// if(statu ==='offline'){
//     color="red";}
//     else{
//         color="green";
//     }

// let color = statu === 'offline' ? 'red':'green';
