let h1=document.querySelector("h1");
h1.textContent="bye";
window.addEventListener("keydown",function(info){
if(info.key == " "){
    h1.textContent="sapce";
}
else{
    h1.textContent=info.key;
}
console.dir(info);
});