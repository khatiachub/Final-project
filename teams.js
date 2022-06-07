
//slider
let team=document.getElementById('testimonials');
let datta=[
    {
        id:1,
        title:'Lucas Devlin',
        image:'images/person_3.jpg',
        description:'Lucas is a member of the account management team at efelle. She loves contributing her empathic, artistic, and detail-oriented nature to the incredible teams of account managers, designers, and developers to help clients achieve their desired outcomes. ',
    },
    {
        title:'Kayla Bryant',
        id:2,
        image:'images/person_2.jpg',
        description:'Kayla is the back-end Application Developer and is responsible for both maintaining Fusion v5 and improving Fusion v6. He believes that software should be performant, reliable, and smooth as butter.'
    },
    {
        title:'Adam Aderson',
        id:3,
        image:'images/person_1.jpg',
        description:'Adam runs the day to day functions at efelle, overseeing People and Production, by supporting the team with approvals, bandwidth and roadblocks.'
    },
]
let sliderIndex=0;
function createImg(item){
    let imgSlide=document.createElement('div');
    imgSlide.style.backgroundImage = 'url('+ item.image +')';
    imgSlide.classList.add('teamimages');
    team.appendChild(imgSlide);
    let title=document.createElement('h4');
    title.innerText=item.title;
    title.classList.add('teamtitle');
    team.appendChild(title);
    let descr=document.createElement('p');
    descr.innerText=item.description;
    descr.classList.add('teamdescr');
    team.appendChild(descr);
}

function createDot(){
    let circles=document.createElement('div');
    circles.classList.add('circles');
    datta.forEach(item => {
        let circle=document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('data-id',item.id-1);
        circle.onclick=function(event){
            let id=event.target.getAttribute('data-id');
            sliderIndex=id
            slide();
        }
        circles.appendChild(circle);
    });
    return circles
}
function currentCircle(){
    let currentCircle=document.getElementsByClassName('circle')
    for(var i=0; i<currentCircle.length; i++){
        currentCircle[sliderIndex].classList.add('currentcircle')
    }
}
function slide(){
    team.innerHTML=''
    createImg(datta[sliderIndex]);
    let circl=createDot();
    team.appendChild(circl)
    currentCircle();
}
slide();
setInterval( () => {
   autoClicks();
  }, 3000)

  function autoClicks(){
      if(sliderIndex<datta.length-1){
          sliderIndex++
          slide();
      }else{
          sliderIndex=0;
          slide();
      }
  }


  
 











  




  