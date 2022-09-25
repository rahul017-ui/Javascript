function sum(...nums){
    return nums.reduce((total,currval) => {
        return total + currval

    })
}


function fullName(first,last,...titles){
    console.log('first',first)
    console.log('last',last)
    console.log('titles',titles)
}


const multiply =(...nums)=>(
    nums.reduce((total,currval)=> total * currval)
)