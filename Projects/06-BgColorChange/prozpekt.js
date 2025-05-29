let changeColor;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('#start').addEventListener('click',function(e){
    e.preventDefault();
    if(!changeColor){
     changeColor = setInterval(function(){
            document.querySelector('body').style.backgroundColor  = getRandomColor();
        },1000);
    }
});

document.querySelector('#stop').addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(changeColor);
    changeColor = null;
})