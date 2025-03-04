let count =0;

let add = document.getElementById("add");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");


let display  = document.getElementById("display");


add.addEventListener('click',()=>{
    count++;
    upanimation();
    display.textContent = count;
})

minus.addEventListener('click',()=>{
    if(count>0)
        count--;
    downanimation();
    display.textContent = count;
})

document.addEventListener("DOMContentLoaded",()=>{display.textContent=0});

reset.addEventListener('click',resetFn);

function resetFn (){

    // background.style.height="0";
    animateForeground();
    // background.style.height="40vw";
    
    count =0;
    display.textContent = count;

}


function animateForeground() {
    foreground.classList.add("f-animation");
    background.classList.add("b-animation");
    setTimeout(()=>{
        foreground.classList.remove("f-animation");
        background.classList.remove("b-animation");
    },550);
}

function upanimation(){
    background.classList.add("up-animation");
    setTimeout(()=>{
        background.classList.remove("up-animation");
    },200);
}
function downanimation(){
    background.classList.add("down-animation");
    setTimeout(()=>{
        background.classList.remove("down-animation");
    },200);
}