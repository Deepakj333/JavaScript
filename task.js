document.addEventListener('DOMContentLoaded',()=>{

    const button = document.querySelector('#submit');
    const nput =document.querySelector('#task');
    button.disabled = true;
    nput.onkeyup = ()=>{
      if(nput.value > 0){
        button.disabled = false;
       }else{
        button.disabled = true;
       }
       
    }

    document.querySelector('form').onsubmit = ()=>{
         const task = document.querySelector('#task').value;
         const li= document.createElement('li');
         li.innerHTML = task;
         document.querySelector('#tasks').append(li);
         button.disabled = true;
         document.querySelector('#task').value = '';
         // stop form from submmiting 
         return false;
    }
})