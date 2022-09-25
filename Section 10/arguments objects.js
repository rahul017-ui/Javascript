function sum(){
    const args=[...arguments]
   return args.reduce((total,currVal)=>{
    return total + currVal
   })
}