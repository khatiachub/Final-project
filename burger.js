//burger
let burgerDiv=document.getElementById('burger-div');
let navigation=document.getElementById('nav-div');
burgerDiv.addEventListener('click', function(){
    navigation.classList.toggle('d-block');
    burgerDiv.classList.toggle('act');
})
