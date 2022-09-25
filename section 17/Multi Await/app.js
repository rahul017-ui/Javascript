const movex=(element,amount,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const bodyBoundary =document.body.clientWidth;
            const elRight =element.getBoundingClientRect().right;
            const currLeft =element.getBoundingClientRect().left;
            if(elRight +amount > bodyBoundary){
                reject({bodyBoundary,elRight,amount});

            }
            else {
                element.style.transform =`translateX(${currLeft + amount}px)`;
                resolve();
            }
        },delay);
    });
};

const btn =document.querySelector('button');
async function animateRight(el,amt){
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
   await movex(el,amt,1000);
  
}
animateRight(btn,100).catch((err)=>{
    console.log('all done!!!');
    animateRight(btn,-100);
})