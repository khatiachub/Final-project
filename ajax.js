//ajax
let dataTeam=[
    {
        name:'George Bluth'
    },
    {
        name:'Janet Weaver'
    },
    {
        name:'Emma Wong'
    },
    {
        name:'Eve Holt'
    },
    {
        name:'Charles Morris'
    },
    {
        name:'Tracey Ramos'
    }
]
function ajax() {
    let requist=new XMLHttpRequest();
    requist.open('GET','https://reqres.in/api/users?page=');
    requist.addEventListener('load',function(){
        let data = JSON.parse(requist.responseText);
        data.data.forEach(item => {
            createTags(item)
        });
    });
    requist.send();
}
let teamBlock=document.getElementById('teamblock');

function createTags(item){
    let imageTag=document.createElement('div');
    let imagess=document.createElement('img')
    imagess.src=item.avatar;
    imagess.classList.add('teamimmages')
    imageTag.classList.add('teamclass');
    let paragraph=document.createElement('p');
    paragraph.innerText=item.email;
    paragraph.classList.add('paragraph');
    imageTag.appendChild(paragraph);
    imageTag.appendChild(imagess);
    teamBlock.appendChild(imageTag);
}
// function fragmentt(item){
//     let list=document.createElement('ul');
//     let ulLi=document.createElement('li')
//     ulLi.textContent=item.name;
//     let fragment=document.createDocumentFragment();
//     fragment.appendChild(ulLi);
//     list.appendChild(fragment);
//     teamBlock.appendChild(list)
//  }
// dataTeam.forEach(item => {
//     fragmentt(item)
// });
ajax();


