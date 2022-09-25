### Default Parameters

1.Define=Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
2.exapmple

 const greet =(person,greeting='hi')=>{
    console.log(`${greeting},${person}`)
 }

### Spread Function Call

1.Define=Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or  object.

2.Example of Spread Function Call

function ram(1,2,3,4,5){
    console.log("1",1)
    console.log("2",2)
    console.log("3",3)
    console.log("4",4)
    console.log("5",5)

}

  const nums=['num1','num2','num3','num4',"num5"];
 console.log(ram(...nums));

3.Example of spread in array

const rah=["r55a","r54a","r654a","r54a","ra5"]

const ra=["r5ra5a","r54aaa","r6aa54a","r5g4a","dra5"]

const combine=[...rah,...ra]


#### arguments objects

Define:it contain the value of the arguments passed to the funtion


### Rest Parameter

define: allows a function to accept an indefinite number of arguments as an array



### destructing

define:it allow us to extract multiple properties,or items ,from array at a time.