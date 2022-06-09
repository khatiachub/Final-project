//burger
let burgerDiv=document.getElementById('burger-div');
let navigation=document.getElementById('nav-div');
burgerDiv.addEventListener('click', function(){
    navigation.classList.toggle('d-block');
    burgerDiv.classList.toggle('act');
})

let accordion=document.querySelectorAll('.accord');
for(var i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('acctive');
        this.classList.toggle('back')
    
    })
}

