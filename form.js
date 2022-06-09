//validation
let forms=document.getElementById('form');

forms.addEventListener('submit',function(event){
    event.preventDefault();
    let form=event.target;
    let errors={};

//name
    let name=document.getElementById('firstname').value;
    if(name.length<5||name==''){
        errors.fname='First name must not be empty and must be more then 5 characters'
    }
//lastname
    let lname=document.getElementById('lastname').value;
    if(lname.length<5||lname==''){
        errors.lname='Last name must not be empty and must be more then 5 characters'
    }
//message
let message=document.getElementById('textarea').value;
if(message.length<20||message==''){
    errors.text='Please enter your text, min 20 symbols'
}



 //email   
 let email=document.getElementById('email').value;

    if(email==''){
        errors.email='your email must not be empty'
    }
    
    form.querySelectorAll('.errortext').forEach(item=>{
        item.innerHTML='';
    });
    numbervalidation();
    for(let item in errors){
        let spanText=document.getElementById('error_'+item);
        if(spanText){
            spanText.textContent=errors[item];
            spanText.style.color='red'
        }
    }
    if (Object.keys(errors).length == 0) {
        form.submit();
    }

});

function validation(){
    let mail=document.getElementById('email').value;

    let emailStructure = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailSpan=document.getElementById('error_email');

if(mail.match(emailStructure)){
    emailSpan.innerHTML = 'Your Email is valid';
    emailSpan.style.color = 'green';

}else{
    emailSpan.innerHTML= 'Your Email is invalid';
    emailSpan.style.color = 'red';
    emailSpan.classList.add('emailspan')
}
}

function numbervalidation(){
    let nummber=document.getElementById('numb').value;
    let numb=document.getElementById('errornumber')
    if(nummber==''){
        numb.innerHTML='Please enter a phone number'
        numb.style.color='red'
    } else if(!numbervalidate(nummber)){
        numb.innerHTML='Please enter a valid phone number'
        numb.style.color='red'
    }else{
        numb.innerHTML='Your phone number is valid'
        numb.style.color='green'
    }
}

function numbervalidate(input_str){
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str)
}

