const btn =document.querySelector('button');


btn.addEventListener('click',function(){
    alert('clicked!!!');
})

btn.addEventListener('click',function(){
   console.log('second clicked!!!');
})

btn.addEventListener('mouseover',()=>{
    btn.innerText ='stop'
})

btn.addEventListener('mouseout',()=>{
    btn.innerText='click me!'
})

window.addEventListener('scroll',()=>{
    console.log('stop scrolling')
})