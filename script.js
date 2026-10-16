let boton=document.getElementById("boton");

boton.addEventListener("click",function(event){
    event.preventDefault();
    boton.style.backgroundColor="red";
})