let toggles=document.getElementsByClassName 

('faq-question');
let contentDiv=document.getElementsByClassName
('faq-answer closed');
let icon=document.getElementsByClassName
('icon');
// let icon=document.getElementById('thin-x')
console.log(toggles,contentDiv,icon);

for(let i=0;i<toggles.length;i++){
    toggles[i].addEventListener('click',()=> {
        
        if(parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
            contentDiv[i].style.height=contentDiv[i].scrollHeight+"px";
            
            icon[i].classList.remove('fa-plus');
            icon[i].classList.add('fa-times')
        }else{
            contentDiv[i].style.height="0px"
            icon[i].classList.remove('fa-times');
            icon[i].classList.add('fa-plus');
            
        }
        for(let j=0;j<contentDiv.length;j++){
            if(j!==i){

                
                contentDiv[j].style.height="0px";
                icon[j].classList.remove('fa-times');
                icon[j].classList.add('fa-plus');
            }
        }
    });

}
