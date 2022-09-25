const repeat =(str,times)=>{
    let result='';
    for(let i=0;i<times;i++){
        result +=str;
    }
    return result;
};

const scream=(str)=>{
    return str.toUpperCase() + '!!!';
};

const getRanText =(phrase)=>{
    let text =scream(phrase);
    let rant = repeat(text,8);
    return rant;
};
const makeRant=(phrase,el)=>{
    const h1=document.createElement('h1');
    h1.innerText=getRanText(phrase);
    el.append(h1);
};
makeRant('i hate may',document.body);
makeRant('if you have to cough,please',document.body);