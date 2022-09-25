const btn=document.querySelector('button');


btn.addEventListener('mouseover',()=>{
    console.log('moused over me');
    const height =Math.floor(Math.random() * window.innerHeight)
    const width =Math.floor(Math.random() * window.innerWidth)
    btn.style.left=`${width}px`;
    btn.style.top=`${height}`;


})


btn.addEventListener('click',()=>{
    btn.innerText='you got me';
    document.body.style.backgroundColor='green';
})