const creditCardInput=document.querySelector('#cc')
const termsCheckbox=document.querySelector('#terms')
const veggieSelect=document.querySelector('#veggie')


// const form =document.querySelector('#signup-form');
// form.addEventListener('submit',function(e){
//     alert('SUBMITTED THE FORM!');
//     console.log('cc',creditCardInput.value);
//     console.log('terms',termsCheckbox.checked);
//     console.log('veggie',veggieSelect.value);

    


//     e.preventDefault();

// });



const formData={};

creditCardInput.addEventListener('input',(e)=>{
    console.log('cc changed',e);
   formData['cc'] =e.target.value;
});
veggieSelect.addEventListener('input',(e)=>{
    console.log('VEGGIE!',e);
    formData['veggie']=e.target.value;
});
veggieSelect.addEventListener('input',(e)=>{
    console.log('checkbox!',e);
    formData['agreeToTerms']=e.target.checked;
});