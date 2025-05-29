const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button){
    button.addEventListener('click',function(a){
        if(a.target.id === 'yellow'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id === 'grey'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id === 'white'){
            body.style.backgroundColor = a.target.id;
        }
        if(a.target.id === 'blue'){
            body.style.backgroundColor = a.target.id;
        }
    })
})