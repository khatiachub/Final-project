
//photos

let imm=document.getElementsByClassName('img')
for(var i=0; i<imm.length; i++){
    imm[i].addEventListener('click', function(){
        this.classList.toggle('immage')
    })
}

//slider
let header=document.getElementById('header');
let data=[
    {
        id:1,
        image:'images/1600x1200-6.jpg',
    },
    {
        id:2,
        image:'images/1600x1200-8.jpg'
    },
    {
        id:3,
        image:'images/1600x1200-9.jpg'
    },
    {
        id:4,
        image:'images/1600x1200-11.jpg'
    },
    {
        id:5,
        image:'images/slider-5.jpg'
    }
]
let indexElement=0;
function createImage(item){
    let imageSlide=document.createElement('div');
    imageSlide.style.backgroundImage = 'url('+ item.image +')';
    imageSlide.classList.add('header');
    header.appendChild(imageSlide)
}

function createDots(){
    let dots=document.createElement('div');
    dots.classList.add('dots');
    data.forEach(item => {
        let dot=document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id',item.id-1);
        dot.onclick=function(event){
            let id=event.target.getAttribute('data-id');
            indexElement=id
            slider();
        }
        dots.appendChild(dot);
    });
    return dots
}
function current(){
    let currentDot=document.getElementsByClassName('dot')
    for(var i=0; i<currentDot.length; i++){
        currentDot[indexElement].classList.add('currentdot')
    }
}
function slider(){
    header.innerHTML=''
    createImage(data[indexElement]);
    let dotss=createDots();
    header.appendChild(dotss)
    current();
}
slider();
setInterval( () => {
   autoClick();
  }, 3000)

  function autoClick(){
      if(indexElement<data.length-1){
          indexElement++
          slider();
      }else{
          indexElement=0;
          slider();
      }
  }


  
 











  




  