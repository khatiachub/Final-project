
//slider
let tourSlider=document.getElementById('tourslide');
let data=[
    {
        id:1,
        title:'barcelona',
        image:'images/barcelona2.jpg',
    },
    {
        title:'Rome',
        id:2,
        image:'images/rome2.jpg'
    },
    {
        title:'Budapest',
        id:3,
        image:'images/budapest.jpg'
    },
    {
        title:'Prague',
        id:4,
        image:'images/prague.jpg'
    },
    {
        title:'Rome',
        id:5,
        image:'images/rome.jpg'
    },
    {
        title:'Barcelona',
        id:6,
        image:'images/barcelona.jpg'
    },
    {
        title:'Venice',
        id:7,
        image:'images/venice.jpg'
    }
]
let indexElement=0;
function createImage(item){
    let imageSlide=document.createElement('div');
    imageSlide.style.backgroundImage = 'url('+ item.image +')';
    imageSlide.classList.add('slider');
    tourSlider.appendChild(imageSlide)
    let title=document.createElement('h4');
    title.innerText=item.title;
    title.classList.add('cities')
    tourSlider.appendChild(title)
}

function createDots(){
    let dots=document.createElement('div');
    dots.classList.add('dots');
    data.forEach(item => {
        let dot=document.createElement('div');
        dot.classList.add('slidedot');
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
    let currentDot=document.getElementsByClassName('slidedot')
    for(var i=0; i<currentDot.length; i++){
        currentDot[indexElement].classList.add('currentdot')
    }
}
function slider(){
    tourSlider.innerHTML=''
    createImage(data[indexElement]);
    let dotss=createDots();
    tourSlider.appendChild(dotss)
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


  
 











  




  