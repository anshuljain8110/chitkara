c=document.querySelectorAll(".links")
for(let i=0;i<4;i++){
    c[i].classList.add("hide")
}
function hide1(){
    c[0].classList.toggle("hide");
}
function hide2(){
    c[1].classList.toggle("hide");
}
function hide3(){
    c[2].classList.toggle("hide");
}
function hide4(){
    c[3].classList.toggle("hide");
}